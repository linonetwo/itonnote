import React from 'react';
import { storiesOf } from '@kadira/storybook'; // eslint-disable-line import/no-extraneous-dependencies
import { WithNotes } from '@kadira/storybook-addon-notes'; // eslint-disable-line import/no-extraneous-dependencies
import 'bootstrap/dist/css/bootstrap.css';

import { WideDiv } from '../src/client/styles/components';
import InputField from '../src/client/modules/omniInput/components/InputField';
import { OmniInputView } from '../src/client/modules/omniInput/containers/OmniInput';


storiesOf('OmniInput', module)
  .add('OmniInputView with publish buttons', () => {
    const notes = `
      OmniInputView is a input for search、adding note or so.
    `;
    return (
      <WithNotes notes={notes}>
        <WideDiv >
          <OmniInputView />
        </WideDiv>
      </WithNotes>
  );
})
  .add('InputField with placeholder', () => {
    const notes = `
      Input field should fit inside the outside div.
      That is: when clicking on shadowed div, you will focus on the editor.
    `;
    return (
      <WithNotes notes={notes}>
        <WideDiv shadow>
          <InputField placeholder="请在此输入「我是大煞笔」"/>
        </WideDiv>
      </WithNotes>
  );
});
  