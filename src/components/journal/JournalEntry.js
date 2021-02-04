import React from "react";
import moment from "moment";
const JournalEntry = ({ id, date, title, body, url }) => {
  const noteDate = moment(date);
  return (
    <div className="sidebar__entry">
      {url && (
        <div
          className="sidebar__entry-picture"
          style={{
            backgroundImage: `url(${url})`,
            backgroundSize: "cover",
          }}
        ></div>
      )}
      <div className="sidebar__entry-wrapper">
        <div className="sidebar__entry-body">
          <p className="sidebar__entry-title">{title}</p>
          <p className="sidebar__entry-content">{body}</p>
        </div>
        <div className="sidebar__separator"></div>
        <div className="sidebar__entry-date">
          <span>{noteDate.format("ddd")}</span>
          <h4>{noteDate.format("D")}</h4>
        </div>
      </div>
    </div>
  );
};

export default JournalEntry;
