import React from 'react';
import { storiesOf } from '@kadira/storybook'; // eslint-disable-line import/no-extraneous-dependencies
import { WithNotes } from '@kadira/storybook-addon-notes'; // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components';

import {OmniInput} from '../src/client/modules/omniInput/containers/OmniInput';

const WideDiv = styled.div`
  height: 30vh;
  width: 50vw;

  box-shadow: 10px 10px 5px #888888;
`;



storiesOf('OmniInput', module)
  .add('with text', () => {
    const notes = `
      Input field should fit inside the outside div
    `;
    return (
      <WithNotes notes={notes}>
        <WideDiv>
          <OmniInput />
        </WideDiv>
      </WithNotes>
  );
});
  