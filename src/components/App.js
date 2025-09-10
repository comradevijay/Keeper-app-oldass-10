import React, { useState } from "react";
import "../styles.css";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let [notes, setNotes] = useState([]);

  function onClickHandler(inputText) {
    setNotes([...notes, inputText]);
  }

  function deleteNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((note) => {
        return note !== notes[id];
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onClick={onClickHandler} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onClick={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
