import React from "react";

const Header = () => {
  return (
    <table>
      <tbody>
        <tr style={{ backgroundColor: "#121870", color: "white" }}>
          <th style={{ width: "200px" }}>Name</th>
          <th style={{ width: "120px" }}>EAN</th>
          <th style={{ width: "80px" }}>Type</th>
          <th style={{ width: "80px" }}>Weight, kg</th>
          <th style={{ width: "80px" }}>Color</th>
          <th style={{ width: "80px" }}>Quantity</th>
          <th style={{ width: "80px" }}>Price, $</th>
          <th style={{ width: "60px" }}>Active</th>
          <th style={{ width: "250px" }}>Action</th>
        </tr>
      </tbody>
    </table>
  );
};

export default Header;
