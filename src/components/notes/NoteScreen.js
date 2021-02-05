import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NotesAppBar from './NoteAppBar';
import { useForm } from '../../hooks/useForm';

const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title } = formValues;

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="What did you do today?"
          className="notes__text-area"
          value={body}
          onChange={handleInputChange}
        />
        {note.url && (
          <div className="notes__image">
            <img
              src="https://th.bing.com/th/id/Rdda57ca26e59b9ec3ba87b8b5749ae27?rik=M3lT9rzLHqEGUw&riu=http%3a%2f%2fwww.fodors.com%2fimages%2fitineraries%2fzurich-night.jpg&ehk=kKkRibbcJ6q6AO0FuqU%2feDOnSQPnlSCQLFBYor7PfII%3d&risl=&pid=ImgRaw"
              alt="Some awesome pic"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteScreen;
