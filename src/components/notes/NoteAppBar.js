import React from "react";

const NoteAppBar = () => {
  return (
    <div className="notes__appbar">
      <span>21 de Enero de 2021</span>
      <div>
        <button className="btn">Picture</button>
        <button className="btn">Save</button>
      </div>
    </div>
  );
};

export default NoteAppBar;
