import { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayouts";
import CardExpensesComparison from "../components/Fragments/CardExpensesComparison";
import Icon from "../components/Elements/Icon";
import { expensesService } from "../services/dataService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackBar";
import CircularProgress from "@mui/material/CircularProgress";

const categoryIconMap = {
  housing: <Icon.House />,
  house: <Icon.House />,
  food: <Icon.Food />,
  transportation: <Icon.Transport />,
  transport: <Icon.Transport />,
  entertainment: <Icon.Gamepad />,
  shopping: <Icon.Shopping />,
  others: <Icon.Other />,
  other: <Icon.Other />,
};

const normalizeExpenses = (raw = []) => {
  return raw.map((item, idx) => {
    const category = item.category || item.categoryName || item.name || "Others";
    const amount = item.amount ?? item.total ?? 0;
    const percentage = item.percentage ?? item.percent ?? 0;
    const trend = item.trend || item.direction || (percentage < 0 ? "down" : "up");
    const items = (item.items || item.details || item.transactions || []).map(
      (sub, subIdx) => ({
        id: sub.id || subIdx,
        name: sub.name || sub.title || sub.transactionName || "-",
        amount: sub.amount ?? 0,
        date: sub.date || sub.createdAt || "",
      })
    );

    return {
      id: item.id || idx,
      category,
      amount,
      percentage,
      trend,
      icon: categoryIconMap[category.toString().toLowerCase()] || <Icon.Other />,
      items,
    };
  });
};

function ExpensePage() {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { logout } = useContext(AuthContext);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const fetchExpenses = async () => {
    try {
      const data = await expensesService();
      setExpenses(normalizeExpenses(data));
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Gagal mengambil data expenses",
        severity: "error",
      });
      if (err.status === 401) {
        logout();
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <MainLayout>
      {isLoading ? (
        <div className="flex flex-col justify-center items-center h-96 text-primary">
          <CircularProgress color="inherit" size={50} />
          <span className="mt-2">Loading Data</span>
        </div>
      ) : (
        <CardExpensesComparison data={expenses} />
      )}

      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </MainLayout>
  );
}

export default ExpensePage;
