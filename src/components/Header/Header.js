import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <table>
      <tbody>
        <tr className="Header-row">
          <th className="Header-column_1">Name</th>
          <th className="Header-column_2">EAN</th>
          <th className="Header-column_3">Type</th>
          <th className="Header-column_3">Weight, kg</th>
          <th className="Header-column_3">Color</th>
          <th className="Header-column_3">Quantity</th>
          <th className="Header-column_3">Price, $</th>
          <th className="Header-column_4">Active</th>
          <th className="Header-column_5">Action</th>
        </tr>
      </tbody>
    </table>
  );
};

export default Header;
