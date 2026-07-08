import React from "react";
import ExpenseCategoryCard from "../Elements/ExpenseCategoryCard";

function CardExpensesComparison(props) {
  const { data = [] } = props;

  return (
    <>
      <div className="text-gray-02 text-2xl mb-2">Expenses Comparison</div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, idx) => (
          <ExpenseCategoryCard
            key={item.id || idx}
            category={item.category}
            amount={item.amount}
            percentage={item.percentage}
            trend={item.trend}
            icon={item.icon}
            items={item.items}
          />
        ))}
      </div>
    </>
  );
}

export default CardExpensesComparison;
