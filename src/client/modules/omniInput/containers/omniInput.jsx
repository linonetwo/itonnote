// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Editor from 'draft-js-plugins-editor';
import { EditorState } from 'draft-js';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import createMarkdownShortcutsPlugin from 'draft-js-markdown-shortcuts-plugin';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from 'draft-js-buttons';
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
import 'draft-js/dist/Draft.css';

const inlineToolbarPlugin = createInlineToolbarPlugin({
  structure: [
    ItalicButton,
    BoldButton,
    UnderlineButton,
    CodeButton,
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton,
  ]
});
const markdownShortcutsPlugin = createMarkdownShortcutsPlugin()
const { InlineToolbar } = inlineToolbarPlugin;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

type Props  = { placeholder: string };
type State = { editorState: EditorState };

export class OmniInput extends Component {
  static defaultProps: Props = {
    placeholder: ''
  }
  props: Props;
  state: State = {
    editorState: EditorState.createEmpty()
  };

  editor: Editor;

  constructor(props: Props) {
    super(props);
  }

  focus = () => {
    this.editor.focus();
  };

  onChange = (editorState: EditorState) => this.setState({editorState});


  render() {
    const { placeholder } = this.props;
    return (
      <Container onClick={this.focus}>
        <Editor
          placeholder={placeholder}
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={[inlineToolbarPlugin, markdownShortcutsPlugin]}
          ref={(element) => { this.editor = element; }}
        />
        <InlineToolbar />
      </Container>
    );
  }
}
