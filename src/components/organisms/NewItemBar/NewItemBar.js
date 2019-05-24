import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import withContext from 'HOC/withContext';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme, activeColor }) => theme[activeColor]};
  z-index: 10000;
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 100px 90px;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.4s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  border-radius: 10px;
  margin: 30px 0 100px;
  height: 30vh;
`;

const StyledInputLink = styled(Input)`
  margin-top: 30px;
`;

const NewItemBar = ({ pageContext, isVisible }) => (
  <StyledWrapper activeColor={pageContext} isVisible={isVisible}>
    <Heading big> Create new {pageContext}</Heading>
    <Input placeholder={pageContext !== 'twitters' ? 'title' : 'Account name eg. hello_roman'} />
    {pageContext === 'articles' && <StyledInputLink placeholder="link" />}
    <StyledTextArea as="textarea" placeholder="content" />
    <Button activeColor={pageContext}> Add note </Button>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles', '']),
  isVisible: PropTypes.bool.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
};

export default withContext(NewItemBar);
