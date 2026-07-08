import { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayouts";
import CardBalance from "../components/Fragments/CardBalance";
import CardGoal from "../components/Fragments/CardGoal";
import CardUpcomingBill from "../components/Fragments/CardUpcomingBill";
import CardRecentTransaction from "../components/Fragments/CardRecentTransaction";
import CardStatistic from "../components/Fragments/CardStatistic";
import CardExpenseBreakdown from "../components/Fragments/CardExpenseBreakdown";
import Icon from "../components/Elements/Icon";
import {
  transactions,
  expensesBreakdowns,
  balances,
  expensesStatistics,
} from "../data";
import { goalService, billsService } from "../services/dataService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackBar";

// Icon default untuk tagihan; dicocokkan dari nama tagihan jika memungkinkan
const billIconMap = {
  figma: <Icon.Figma />,
  adobe: <Icon.Adobe />,
};

const normalizeBills = (raw = []) => {
  return raw.map((item, idx) => {
    const name = item.name || item.title || "Bill";
    const matchedIconKey = Object.keys(billIconMap).find((key) =>
      name.toLowerCase().includes(key)
    );

    return {
      id: item.id || idx,
      name,
      date: item.date || item.day || "-",
      month: item.month || "-",
      lastCharge: item.lastCharge || item.last_charge || item.lastCharged || "-",
      amount: item.amount ?? item.total ?? 0,
      icon: matchedIconKey ? billIconMap[matchedIconKey] : <Icon.Bill />,
    };
  });
};

function Dashboard() {
  const [goals, setGoals] = useState({});
  const [isLoadingGoals, setIsLoadingGoals] = useState(true);
  const [bills, setBills] = useState([]);
  const [isLoadingBills, setIsLoadingBills] = useState(true);
  const { logout } = useContext(AuthContext);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const fetchGoals = async () => {
    try {
      const data = await goalService();
      setGoals(data || {});
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Gagal mengambil data goals",
        severity: "error",
      });
      if (err.status === 401) {
        logout();
      }
    } finally {
      setIsLoadingGoals(false);
    }
  };

  const fetchBills = async () => {
    try {
      const data = await billsService();
      setBills(normalizeBills(data));
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Gagal mengambil data upcoming bill",
        severity: "error",
      });
      if (err.status === 401) {
        logout();
      }
    } finally {
      setIsLoadingBills(false);
    }
  };

  useEffect(() => {
    fetchGoals();
    fetchBills();
  }, []);

  return (
    <>
      <MainLayout>
        <div className="grid sm:grid-cols-12 gap-6">
          <div className="sm:col-span-4">
            <CardBalance data={balances} />
          </div>
          <div className="sm:col-span-4">
            <CardGoal data={goals} isLoading={isLoadingGoals} />
          </div>
          <div className="sm:col-span-4">
            <CardUpcomingBill data={bills} isLoading={isLoadingBills} />
          </div>
          <div className="sm:col-span-4 sm:row-span-2">
            <CardRecentTransaction data={transactions} />
          </div>
          <div className="sm:col-span-8">
            <CardStatistic data={expensesStatistics} />
          </div>
          <div className="sm:col-span-8">
            <CardExpenseBreakdown data={expensesBreakdowns} />
          </div>
        </div>

        <AppSnackbar
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
        />
      </MainLayout>
    </>
  );
}

export default Dashboard;
