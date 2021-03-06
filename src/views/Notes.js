import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'components/templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Notes = ({ notes }) => (
  <GridTemplate>
    {notes.map(({ title, content, created, id }) => (
      <Card id={id} title={title} content={content} created={created} key={id} />
    ))}
  </GridTemplate>
);

const mapStateToProps = state => {
  const { notes } = state;
  return { notes };
};

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};

export default connect(mapStateToProps)(Notes);
