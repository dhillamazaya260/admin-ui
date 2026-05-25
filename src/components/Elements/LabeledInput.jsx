import React from "react";

function LabeledInput(props) {
  const { label, id, ...rest } = props;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-01">
        {label}
      </label>
      <input
        id={id}
        className="border border-gray-04 rounded-md py-3 px-4 text-sm text-gray-03 bg-white focus:outline-none focus:border-primary"
        {...rest}
      />
    </div>
  );
}

export default LabeledInput;