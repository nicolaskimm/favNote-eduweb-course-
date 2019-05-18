import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  :first-of-type {
    z-index: 1000;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 9px solid ${({ theme }) => theme.twitter};
  border-radius: 50px;
  position: absolute;
  right: 25px;
  top: 25px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`;

const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>siemson!</StyledHeading>
      <DateInfo>3 days</DateInfo>
      {cardType === 'twitter' && <StyledAvatar src="https://avatars.io/twitter/helloroman" />}
      {cardType === 'article' && <StyledLinkButton href="https://www.avatars.io/" />}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Potra nome nostri allo i degli esse da. Vita la la del alla e. Suoi cosa di in fa che
        mescolati, e audaci noi etterno nel procuratori dinanzi accio la novellare, cospetto che se
        occulta merito beato, noi alla cose di angoscia noi giudice forse. E furono alcun dio
        ammirabile. Coloro il fosse lodato sí senza facciamo il coloro essilio, esso noi tanto
        facitore avvedimento cominciamento raccontare a, nostri novella di parte. Convenevole
        ingannati coloro da divina allo da, per di piú per nostri, niuno uomini propria che
        iscacciato in divenuti come, tutte maravigliose fallo porgere come, santo suo.
      </Paragraph>
      <Button secondary>REMOVE</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Card.defaultProps = {
  cardType: 'note',
};

export default Card;
