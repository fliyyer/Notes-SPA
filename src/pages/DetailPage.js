import React from "react";
import propTypes from "prop-types";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { getNote } from "../utils/local-data";

const DetailNotes = () => {
  const { id } = useParams();
  return <DetailPage id= {id} />
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: getNote(props.id),
    };
  }

  render() {
    return (
      <section>
        <NoteDetail {...this.state.note} />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: propTypes.func.isRequired,
}

export default DetailNotes;
