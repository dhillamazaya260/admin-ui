import React, { useContext } from "react";
import Icon from "./Icon";
import { DarkModeContext } from "../../context/darkModeContext";

// Element baru: satu box kategori expense (icon, nominal, persentase, dan daftar item di bawahnya)
function ExpenseCategoryCard(props) {
  const { category, amount, percentage, trend = "up", icon, items = [] } = props;
  const { isDarkMode } = useContext(DarkModeContext);

  const isUp = trend === "up";
  const ArrowIcon = isUp ? Icon.ArrowUp : Icon.ArrowDown;
  const trendColor = isUp ? "text-special-red" : "text-special-green";

  return (
    <div
      className={`rounded-lg shadow-xl p-4 ${
        isDarkMode ? "bg-special-bg3 text-white" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <div
            className={`p-3 rounded-lg flex place-content-center ${
              isDarkMode ? "bg-defaultBlack text-white" : "bg-special-bg text-gray-02"
            }`}
          >
            {icon || <Icon.Other />}
          </div>
          <div className="ms-3">
            <div className={isDarkMode ? "text-gray-05 text-xs" : "text-gray-02 text-xs"}>
              {category}
            </div>
            <div className="font-bold text-lg">${amount}</div>
          </div>
        </div>
        <div className={`flex items-center text-xs ${trendColor}`}>
          {percentage}%
          <ArrowIcon size={14} />
        </div>
      </div>
      <div className={`text-xs mb-2 ${isDarkMode ? "text-gray-05" : "text-gray-03"}`}>
        Compare to the last month
      </div>

      <div className={`border-t ${isDarkMode ? "border-special-bg" : "border-gray-05"}`}>
        {items.map((item, idx) => (
          <div
            key={item.id || idx}
            className="flex justify-between items-center py-2 text-sm"
          >
            <span className={isDarkMode ? "text-gray-05" : "text-gray-02"}>
              {item.name}
            </span>
            <div className="text-right">
              <div className="font-bold">${item.amount}</div>
              <div className={`text-xs ${isDarkMode ? "text-gray-05" : "text-gray-03"}`}>
                {item.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseCategoryCard;
