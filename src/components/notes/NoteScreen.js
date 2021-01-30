import React from "react";
import NotesAppBar from "./NoteAppBar";

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="What did you do today?"
          className="notes__text-area"
        />
        <div className="notes__image">
          <img
            src="https://th.bing.com/th/id/Rdda57ca26e59b9ec3ba87b8b5749ae27?rik=M3lT9rzLHqEGUw&riu=http%3a%2f%2fwww.fodors.com%2fimages%2fitineraries%2fzurich-night.jpg&ehk=kKkRibbcJ6q6AO0FuqU%2feDOnSQPnlSCQLFBYor7PfII%3d&risl=&pid=ImgRaw"
            alt="Some awesome pic"
          />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;
