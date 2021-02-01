import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import NothingSelected from "./NothingSelected";
import NoteScreen from "../notes/NoteScreen";
const JournalScreen = () => {
  const { active } = useSelector((state) => state.notes);

  return (
    <>
      <Navbar />
      <div className="journal__main-content">
        <Sidebar />
        <main>{active ? <NoteScreen /> : <NothingSelected />}</main>
      </div>
    </>
  );
};

export default JournalScreen;
