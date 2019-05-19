import React from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'components/templates/DetailsTemplate';
import { routes } from 'routes';

const DetailsPage = ({ match }) => (
  <DetailsTemplate>
    <p>{`is twitter: ${match.path === routes.twitter}`}</p>
  </DetailsTemplate>
);

DetailsPage.propTypes = {
  match: PropTypes.element.isRequired,
};

export default DetailsPage;
