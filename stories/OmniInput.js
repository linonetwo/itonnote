import React from 'react';
import { storiesOf, action } from '@kadira/storybook'; // eslint-disable-line import/no-extraneous-dependencies
import { WithNotes } from '@kadira/storybook-addon-notes'; // eslint-disable-line import/no-extraneous-dependencies
import 'bootstrap/dist/css/bootstrap.css';

import { WideDiv } from '../src/client/styles/components';
import InputField from '../src/client/modules/omniInput/components/InputField';
import CircularMenu from '../src/client/modules/omniInput/components/CircularMenu';
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
})
  .add('Circular menu', () => {
    const notes = `
      Circular menu is cool
    `;
    const items = [
      {
        component: <div>'first one'</div>,
        function: action('first one')
      },
      {
        component: <div>'second one'</div>,
        function: action('second one')
      },
      {
        component: <div>'third one'</div>,
        function: action('third one')
      },
      {
        component: <div>'forth one'</div>,
        function: action('forth one')
      }
    ];
    return (
      <WithNotes notes={notes}>
        
          <CircularMenu items={items} radius={300}>
            <WideDiv shadow />
          </CircularMenu>
      </WithNotes>
  );
});
