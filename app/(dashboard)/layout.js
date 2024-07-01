import React from 'react';
import { FaInbox, FaClipboardList, FaTicketAlt, FaHeart, FaStore, FaHistory, FaUser, FaBook, FaEnvelopeOpenText, FaCartArrowDown, FaSignOutAlt } from 'react-icons/fa';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>Threat Hunting</h2>
        </div>
        <ul className="sidebar-menu">
          <li className="sidebar-item active"><FaClipboardList /> Threats</li>
          <li className="sidebar-item"><FaInbox /> Inbox</li>
          <li className="sidebar-item"><FaClipboardList /> Pending Reviews</li>
          <li className="sidebar-item"><FaTicketAlt /> Voucher</li>
          <li className="sidebar-item"><FaHeart /> Saved Items</li>
          <li className="sidebar-item"><FaStore /> Followed Sellers</li>
          <li className="sidebar-item"><FaHistory /> Recently Viewed</li>
          <li className="sidebar-item"><FaUser /> Account Management</li>
          <li className="sidebar-item"><FaBook /> Address Book</li>
          <li className="sidebar-item"><FaEnvelopeOpenText /> Newsletter Preferences</li>
        </ul>
        <div className="sidebar-logout">
          <FaSignOutAlt/> Logout
        </div>
      </aside>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
