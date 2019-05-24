import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'components/templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Articles = ({ articles }) => (
  <GridTemplate>
    {articles.map(item => (
      <Card
        id={item.id}
        key={item.title}
        cardType="articles"
        title={item.title}
        content={item.content}
        articleUrl={item.articleUrl}
        created={item.created}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = state => {
  const { articles } = state;
  return { articles };
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

export default connect(mapStateToProps)(Articles);
