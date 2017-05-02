import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor'; // eslint-disable-line import/no-unresolved
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin'; // eslint-disable-line import/no-unresolved
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
} from 'draft-js-buttons'; // eslint-disable-line import/no-unresolved
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';

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
const { InlineToolbar } = inlineToolbarPlugin;
const text = 'In this editor a toolbar shows up once you select part of the text …';

export class OmniInput extends Component {
  constructor(props) {
    super(props);

    this.subscription = null;
  }

  state = {editorState: createEditorStateWithText(text)};

  focus = () => {
    this.editor.focus();
  };

  onChange = (editorState) => this.setState({editorState});


  render() {
    return (
      <div onClick={this.focus}>
        <Editor editorState={this.state.editorState} onChange={this.onChange} plugins={[inlineToolbarPlugin]} ref={(element) => { this.editor = element; }}/>
        <InlineToolbar />
      </div>
    );
  }
}
