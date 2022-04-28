import React from "react";
import { useParams } from "react-router-dom";

function ViewEmployComponent(props) {
  const { id } = useParams();

  return (
    <div>
      <h2>员工信息</h2>
    </div>
  );
}

export default ViewEmployComponent;
