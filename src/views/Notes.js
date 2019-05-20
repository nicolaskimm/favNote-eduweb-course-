import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'components/templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Notes = ({ notes }) => (
  <GridTemplate pageType="notes">
    {notes.map(item => (
      <Card
        id={item.id}
        key={item.title}
        cardType="notes"
        title={item.title}
        content={item.content}
        created={item.created}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = state => {
  const { notes } = state;
  return { notes };
};

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Notes);
