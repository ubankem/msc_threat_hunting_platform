import { logOut } from "@/actions/auth-actions";
import Link from "next/link";
import React from "react";
import {
  FaInbox,
  FaClipboardList,
  FaTicketAlt,
  FaHeart,
  FaStore,
  FaHistory,
  FaUser,
  FaBook,
  FaEnvelopeOpenText,
  FaSignOutAlt,
} from "react-icons/fa";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Threat Hunting</h2>
        </div>
        <ul className="sidebar-menu">
          <li className="sidebar-item ">
            <FaClipboardList />
            <Link href="/threats" className="active">
              Threats
            </Link>{" "}
          </li>
          <li className="sidebar-item">
            <FaInbox />{" "}
            <Link href="/threats" className="active">
              Detected Threats
            </Link>{" "}
          </li>
          <li className="sidebar-item">
            <FaInbox />{" "}
            <Link href="/todos" className="active">
              View Todos
            </Link>{" "}
          </li>

          <li className="sidebar-item">
            <FaTicketAlt />{" "}
            <Link href="/todo" className="active">
              Create Todo (Secured Client)
            </Link>{" "}
          </li>
          <li className="sidebar-item">
            <FaHeart />{" "}
            <Link href="/external" className="active">
              Create Todo (Unsecured Client)
            </Link>
          </li>
          <li className="sidebar-item">
            <FaStore />{" "}
            <Link href="/reports" className="active">
              View Reports/Charts
            </Link>
          </li>
          {/*
          <li className="sidebar-item">
            <FaHistory /> Recently Viewed
          </li>
          <li className="sidebar-item">
            <FaUser /> Account Management
          </li>
          <li className="sidebar-item">
            <FaBook /> Address Book
          </li>
          <li className="sidebar-item">
            <FaEnvelopeOpenText /> Newsletter Preferences
          </li> */}
        </ul>
        <div className="sidebar-logout">
          <FaSignOutAlt />{" "}
          <form action={logOut}>
            <button className="logout">Log out</button>
          </form>
        </div>
      </aside>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default DashboardLayout;
