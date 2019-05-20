import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'components/templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Twitters = ({ twitters }) => (
  <GridTemplate pageType="twitters">
    {twitters.map(item => (
      <Card
        id={item.id}
        key={item.title}
        cardType="twitters"
        title={item.title}
        content={item.content}
        created={item.created}
        twitterName={item.twitterName}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = state => {
  const { twitters } = state;
  return { twitters };
};

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Twitters);
