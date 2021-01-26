import React from "react";
import avatar from "../../images/avatar.jpg";
import JournalEntries from "./JournalEntries";
const Sidebar = () => {
  return (
    <aside className="sidebar__sidebar-wrapper">
      <div className="sidebar__user-info">
        <img src={avatar} alt="User Avatar" />
        <h1>David Cortes</h1>
        <h2>
          <span>5</span> entries added
        </h2>
      </div>
      <div className="sidebar__new-entry">
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">New entry</p>
      </div>
      <JournalEntries />
      <div className="sidebar__sidebar-hide">
        <i className="fa fa-chevron-left fa-1x" aria-hidden="true"></i>
      </div>
    </aside>
  );
};

export default Sidebar;
