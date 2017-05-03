// @flow
import React, { Component } from 'react';
import { Card } from 'reactstrap';

import InputField from '../components/InputField';
import { MaximunWidthHeight, MarginWH } from '../../../styles/components';


type Props  = { placeholder: string };
type State = { };

export class OmniInputView extends Component {
  static defaultProps: Props = {
    placeholder: ''
  }
  props: Props;
  state: State = {
  };

  render() {
    return (
      <MaximunWidthHeight>
        <Card style={{ height: 'inherit' }}>
          <MarginWH all={{mobile: 2, tablet: 2, desktop: 3}}>
            <InputField />
          </MarginWH>
        </Card>
      </MaximunWidthHeight>
    );
  }
}
