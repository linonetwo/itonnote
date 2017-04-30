import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook'; // eslint-disable-line import/no-extraneous-dependencies
import Button from './Button';
import Welcome from './Welcome';
import { Counter } from '../src/client/modules/omniInput/containers/counter';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('Button', module)
  .add('with text', () => {
    const count = { amount: 0 };
    return (
    <Counter loading={false} count={count} addCount={number => count.amount += number} reduxCount={count.amount}></Counter>
  );});
  