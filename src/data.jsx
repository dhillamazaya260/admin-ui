import Icon from "./components/Elements/Icon";

export const balances = [
  {
    id: 1,
    bankName: "Master Card",
    branchName: "",
    accountType: "Credit Card",
    accountNumber: "3388 4556 8860 80000",
    balance: 25000,
    logo: <Icon.Mastercard width={40} />,
  },
  {
    id: 2,
    bankName: "AB Bank Ltd.",
    branchName: "Park Street Branch",
    accountType: "Checking",
    accountNumber: "693 456 69 90000",
    balance: 25000,
    logo: <Icon.Visa width={40} />,
  },
];

export const goals = {
  targetAmount: 20000,
  presentAmount: 12500,
};

export const bills = [
  {
    id: 1,
    name: "Figma",
    type: "Figma - Monthly",
    amount: 150,
    date: "May 15",
    lastCharge: "Last Charge - 14 May, 2022",
    logo: <Icon.Figma />,
  },
  {
    id: 2,
    name: "Adobe",
    type: "Adobe - Yearly",
    amount: 559,
    date: "Jun 16",
    lastCharge: "Last Charge - 17 Jun, 2023",
    logo: <Icon.Adobe />,
  },
];

export const transactions = [
  {
    id: 1,
    name: "GTR 5",
    category: "Gadget & Gear",
    amount: 160,
    date: "2023-05-17",
    type: "expense",
    icon: <Icon.Gamepad />,
  },
  {
    id: 2,
    name: "Polo Shirt",
    category: "XL Fashions",
    amount: 20,
    date: "2023-05-17",
    type: "expense",
    icon: <Icon.Shopping />,
  },
  {
    id: 3,
    name: "Biriyani",
    category: "Hajir Biriyani",
    amount: 12,
    date: "2023-05-17",
    type: "expense",
    icon: <Icon.Food />,
  },
  {
    id: 4,
    name: "Movie Ticket",
    category: "Inox",
    amount: 15,
    date: "2023-05-17",
    type: "expense",
    icon: <Icon.Movie />,
  },
  {
    id: 5,
    name: "Taxi Fare",
    category: "Uber",
    amount: 12,
    date: "2023-05-17",
    type: "expense",
    icon: <Icon.Transport />,
  },
  {
    id: 6,
    name: "Keyboard",
    category: "Gadget & Gear",
    amount: 22,
    date: "2023-05-17",
    type: "expense",
    icon: <Icon.Gamepad />,
  },
];

export const expensesBreakdowns = [
  {
    id: 1,
    name: "Housing",
    amount: 250,
    percentage: 15,
    trend: "up",
    icon: <Icon.House />,
  },
  {
    id: 2,
    name: "Food",
    amount: 350,
    percentage: 88,
    trend: "down",
    icon: <Icon.Food />,
  },
  {
    id: 3,
    name: "Transportation",
    amount: 50,
    percentage: 12,
    trend: "down",
    icon: <Icon.Transport />,
  },
  {
    id: 4,
    name: "Entertainment",
    amount: 80,
    percentage: 30,
    trend: "up",
    icon: <Icon.Movie />,
  },
  {
    id: 5,
    name: "Shopping",
    amount: 420,
    percentage: 30,
    trend: "up",
    icon: <Icon.Shopping />,
  },
  {
    id: 6,
    name: "Others",
    amount: 650,
    percentage: 33,
    trend: "up",
    icon: <Icon.Other />,
  },
];

export const expensesStatistics = {
  dataKey: "date",
  series: [
    { dataKey: "amountThisWeek", label: "This Week", color: "#E8E8E8" },
    { dataKey: "amountLastWeek", label: "Last Week", color: "#299D91" },
  ],
  data: [
    { id: 1, date: "17 Sun", amountThisWeek: 25000, amountLastWeek: 50000 },
    { id: 2, date: "18 Mon", amountThisWeek: 50000, amountLastWeek: 10000 },
    { id: 3, date: "19 Tue", amountThisWeek: 10000, amountLastWeek: 50000 },
    { id: 4, date: "20 Wed", amountThisWeek: 50000, amountLastWeek: 50000 },
    { id: 5, date: "21 Thu", amountThisWeek: 50000, amountLastWeek: 10000 },
    { id: 6, date: "22 Fri", amountThisWeek: 25000, amountLastWeek: 10000 },
    { id: 7, date: "23 Sat", amountThisWeek: 50000, amountLastWeek: 10000 },
  ],
};