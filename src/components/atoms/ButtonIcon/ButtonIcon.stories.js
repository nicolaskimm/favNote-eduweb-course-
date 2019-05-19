import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import bulbIcon from 'assets/icons/bulb.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import logoutIcon from 'assets/icons/logout.svg';
import plusIcon from 'assets/icons/plus.svg';
import penIcon from 'assets/icons/pen.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background: ${({ theme }) => theme.note};
`;

storiesOf('Atoms/ButtonIcon', module)
  .addDecorator(story => <YellowBackground>{story()}</YellowBackground>)
  .add('Bulb', () => <ButtonIcon icon={bulbIcon} />)
  .add('Logout', () => <ButtonIcon icon={logoutIcon} />)
  .add('LogoutActive', () => <ButtonIcon icon={logoutIcon} />)
  .add('Plus', () => <ButtonIcon icon={plusIcon} />)
  .add('Pen', () => <ButtonIcon icon={penIcon} />)
  .add('Twitter', () => <ButtonIcon icon={twitterIcon} />);
