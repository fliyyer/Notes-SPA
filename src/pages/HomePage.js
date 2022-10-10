import React from "react";
import propTypes from "prop-types"
import NoteList from "../components/NoteList";
import { getAllNotes } from "../utils/local-data";
import { deleteNote, getNote } from "../utils/local-data";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: getNote(props.id),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);

  }

  onDeleteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        note: getNote(id),
      };
    });
  }

  render() {
    const notes = getAllNotes();
    return (
      <main>
        <h1>Catatan Aktif</h1>
        <NoteList notes={notes} onDelete={this.onDeleteHandler} />
      </main>
    );
  }
}

HomePage.propTypes = {
  id: propTypes.func.isRequired,
}

export default HomePage;
