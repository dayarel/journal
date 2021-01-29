import React from "react";
import JournalEntries from "./JournalEntries";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { name, photo } = useSelector((state) => state.auth);
  return (
    <aside className="sidebar__sidebar-wrapper">
      <div className="sidebar__user-info">
        <img src={photo} alt="User Avatar" />
        <h1>{name}</h1>
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
