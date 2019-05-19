import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Molecules/Card', module)
  .add('note', () => <Card />)
  .add('twitter', () => <Card cardType="twitters" />)
  .add('article', () => <Card cardType="articles" />);
