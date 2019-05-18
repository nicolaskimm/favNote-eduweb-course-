import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Card', module)
  .add('note', () => <Card />)
  .add('twitter', () => <Card cardType="twitter" />)
  .add('article', () => <Card cardType="article" />);
