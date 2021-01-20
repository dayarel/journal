import React from "react";
const JournalEntry = ({ value }) => {
  return (
    <div className="sidebar__entry">
      <div
        className="sidebar__entry-picture"
        style={{
          backgroundImage:
            "url(https://s27363.pcdn.co/wp-content/uploads/2019/11/Zurich-for-Facebook.jpg.optimal.jpg",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="sidebar__entry-wrapper">
        <div className="sidebar__entry-body">
          <p className="sidebar__entry-title">A new day</p>
          <p className="sidebar__entry-content">
            Mark showed me some Manchester snowy videos. I hate him!
          </p>
        </div>
        <div className="sidebar__separator"></div>
        <div className="sidebar__entry-date">
          <span>Monday</span>
          <h4>28</h4>
        </div>
      </div>
    </div>
  );
};

export default JournalEntry;
