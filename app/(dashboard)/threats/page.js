import ThreatList from "@/components/threat-list";
import { verifyAuth } from "@/lib/auth";
import { getThreats } from "@/lib/threats";
import { redirect } from "next/navigation";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Orders = async () => {
  const result = await verifyAuth();
  if (!result.user) {
    return redirect("/login");
  }
  const threats = await getThreats();
  return (
    <div className="orders-container">
      <h2>Cyber Threats Monitoring</h2>
      <div className="orders-buttons">
        <button className="orders-button active">ONGOING THREATS (0)</button>
        <button className="orders-button">DETECTED THREATS (0)</button>
      </div>
      <div className="orders-empty">
        <FaShoppingCart className="orders-icon" />
        {threats ? <ThreatList threats={threats} /> : <p>No Threats </p>}

        <p>All detected threats will be saved here.</p>
        <button className="shopping-button">START MONITORING</button>
      </div>
    </div>
  );
};

export default Orders;
