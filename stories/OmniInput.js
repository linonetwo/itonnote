import React from 'react';
import { storiesOf } from '@kadira/storybook'; // eslint-disable-line import/no-extraneous-dependencies
import { WithNotes } from '@kadira/storybook-addon-notes'; // eslint-disable-line import/no-extraneous-dependencies


import {OmniInput} from '../src/client/modules/omniInput/containers/omniInput';


storiesOf('OmniInput', module)
  .add('with text', () => {
    return (
      <WithNotes notes={'Here we use some emoji as the Button text. Isn\'t it look nice?'}>
        <OmniInput></OmniInput>
      </WithNotes>
  );
});
  