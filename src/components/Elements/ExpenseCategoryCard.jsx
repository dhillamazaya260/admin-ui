import React from "react";
import Icon from "./Icon";

// Element baru: satu box kategori expense (icon, nominal, persentase, dan daftar item di bawahnya)
function ExpenseCategoryCard(props) {
  const { category, amount, percentage, trend = "up", icon, items = [] } = props;

  const isUp = trend === "up";
  const ArrowIcon = isUp ? Icon.ArrowUp : Icon.ArrowDown;
  const trendColor = isUp ? "text-special-red" : "text-special-green";

  return (
    <div className="bg-white rounded-lg shadow-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <div className="bg-special-bg text-gray-02 p-3 rounded-lg flex place-content-center">
            {icon || <Icon.Other />}
          </div>
          <div className="ms-3">
            <div className="text-gray-02 text-xs">{category}</div>
            <div className="font-bold text-lg">${amount}</div>
          </div>
        </div>
        <div className={`flex items-center text-xs ${trendColor}`}>
          {percentage}%
          <ArrowIcon size={14} />
        </div>
      </div>
      <div className="text-gray-03 text-xs mb-2">Compare to the last month</div>

      <div className="border-t border-gray-05">
        {items.map((item, idx) => (
          <div
            key={item.id || idx}
            className="flex justify-between items-center py-2 text-sm"
          >
            <span className="text-gray-02">{item.name}</span>
            <div className="text-right">
              <div className="font-bold">${item.amount}</div>
              <div className="text-gray-03 text-xs">{item.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseCategoryCard;
