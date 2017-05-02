import React from 'react';
import { addDecorator } from '@kadira/storybook'; // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components';

const Center = styled.article`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenterDecorator = (story) => (
  <Center>
    {story()}
  </Center>
);
addDecorator(CenterDecorator);
