// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import {TrackDocument, TrackedDiv} from 'react-track';
import {centerTop} from 'react-track/tracking-formulas';
import ReactCursorPosition from 'react-cursor-position';
import Rx from 'rxjs/Rx';

const centerLeft = containerRect => rect => ~~(rect.top + rect.width / 2 - containerRect.left);

const Rotater = styled.div`
  position: absolute;
  /* 1. →posFromLeft ↓posFromTop, move to the center of trigger */
  /* 2. →move (radius/2)*sin(index * 圆心角) ↓move (radius/2)*cos(index * 圆心角), move to the cycle */
  top: ${p => p.top + p.radius / 2 * Math.cos(p.index * p.angel)}px;
  left: ${p => p.left + p.radius / 2 * Math.sin(p.index * p.angel)}px;
  /* hiding when closed */
  transform: scale(${p => p.hiding ? 0 : 1});
  transition: all ${p => p.speed || '0.2'}s ease ${p => p.speed || '0.2'}s;
`;

type TriggerType = 'PassEdge' | 'Click';

type MenuItem = {
  component: typeof React.Element,
  function: Function,
  triggerBy?: TriggerType,
  notCloseByTrigger?: boolean,
  items?: Array<MenuItem>
}

type Props = {
  children?: typeof React.Element,
  items: Array<MenuItem>,
  radius: number,
  disabled?: boolean,
  triggerBy?: TriggerType,
}

type State = {
  hiding: boolean,
}

export default class CircularMenu extends Component {
  props: Props

  state: State = {
    hiding: true,
  }

  Trigger = (props: { cursorPosition: { isOutside: boolean }}) => {
  const {
    cursorPosition: {
      isOutside = true
    } = {}
  } = props;

  return (
    <div>
      {props.children}
    </div>
  );
};

  render() {
    const angelForEach = 2 * Math.PI / this.props.items.length;
    return (
      <TrackDocument formulas={[centerTop, centerLeft]}>
      {(centerTop, centerLeft) =>
      <TrackedDiv formulas={[centerTop, centerLeft]}>
      {(poscenterTop, poscenterLeft) => (<div>
            {/* Trigger */}
            <div onClick={() => {if (!this.props.disabled) this.setState({ hiding: !this.state.hiding });}}>
              {this.props.children}
            </div>
            {/* Menu Items */}
            {this.props.items.map((item, index) =>
              <Rotater
                onClick={() => {
                  item.function();
                  if (item.notCloseByTrigger === true) return;
                  return this.setState({ hiding: true });
                }}
                hiding={this.state.hiding}
                radius={this.props.radius}
                top={poscenterTop}
                left={poscenterLeft}
                angel={angelForEach}
                index={index}
                key={'' + item.text + item.function + index}
              >
                {item.component}
              </Rotater>
            )}
          </div>)
      }
      </TrackedDiv>
      }
      </TrackDocument>
    );
  }
}