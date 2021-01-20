import React from "react";
import JournalEntry from "./JournalEntry";

const JournalEntries = () => {
  const entries = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="sidebar__journal-entries">
      {entries.map((value) => (
        <JournalEntry key={value} value={value} />
      ))}
    </div>
  );
};

export default JournalEntries;
