import React from "react";
import GrandChild from "./GrandChild";

function Child(props) {
  return (
    <div className="ps-10">
      <GrandChild count={props.count} />
    </div>
  );
}

export default Child;