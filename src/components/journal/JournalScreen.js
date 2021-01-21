import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// import NothingSelected from "./NothingSelected";
import NoteScreen from "../notes/NoteScreen";
const JournalScreen = () => {
  return (
    <>
      <Navbar />
      <div className="journal__main-content">
        <Sidebar />
        <main>
          <NoteScreen />
        </main>
      </div>
    </>
  );
};

export default JournalScreen;
