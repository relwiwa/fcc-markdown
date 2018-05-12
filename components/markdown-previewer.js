import React, { Component } from 'react';

import HtmlOutput from './html-output';
import MarkdownInput from './markdown-input';
import MarkdownControls from './markdown-controls';

import markdownExamples from '../data/markdown-example';
import UI from '../data/markdown-ui-stati';

class MarkdownPreviewer extends Component {
  constructor() {
    super();
    this.state = {
      markdown: '',
      instruction: '',
      inputUIStatus: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    
    this.instructionCategories = Object.keys(markdownExamples.examples);
  }

  componentWillMount() {
    this.setState({
      instruction: markdownExamples.intro,
      inputUIStatus: UI.TYPING
    })
  }

  componentDidMount() {
    this.typeIntro();
  }

  componentWillUnmount() {
    clearTimeout(this.typingTimeout);
  }

  handleChange(event) {
    if (this.state.inputUIStatus === UI.USER_INPUT) {
      this.setState({
        markdown: event.target.value
      });
    }
  }

  handleFocus(event) {
    if (this.state.inputUIStatus === UI.TYPING) {
      clearTimeout(this.typingTimeout);
      this.setState({
        instruction: markdownExamples.intro,
        inputUIStatus: UI.USER_INPUT,
        markdown: '',
      });
    }
  }

  typeIntro() {
    if (this.state.inputUIStatus === UI.TYPING) {
      const letter = this.state.instruction[0];
      const instruction = this.state.instruction.length !== 1
        ? this.state.instruction.substring(1)
        : markdownExamples.intro;
      const markdown = this.state.markdown + letter;
      const inputUIStatus = this.state.instruction.length === 1
        ? UI.USER_INPUT
        : UI.TYPING;
      this.setState({
        markdown,
        instruction,
        inputUIStatus
      });
      this.typingTimeout = setTimeout(() => {
        this.typeIntro();
      }, 200);
    }
    else {
      this.typingTimeout = setTimeout(() => {
        this.setState({
          markdown: '',
        });
      }, 2500);
    }
  }

  render() {
    return (
      <div className="markdown-previewer grid-container grid-container-padded">
        <div className="grid-x grid-padding-x">
          <h1 className="cell text-center">Markdown Previewer</h1>
          <div className="cell medium-6">
            <MarkdownInput
              markdown={(this.state.inputUIStatus === UI.INSTRUCTIONS) ? this.state.instruction : this.state.markdown}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
            />
            <MarkdownControls
              instructionCategories={this.instructionCategories}
              inputUIStatus={this.state.inputUIStatus}
              onDisplayInstructions={() => this.setState({ inputUIStatus: UI.INSTRUCTIONS })}
              onHideInstructions={() => this.setState({ inputUIStatus: UI.USER_INPUT })}
              onResetInput={() => this.setState({ markdown: '' })}
              onUpdateInstructions={(instruction) => this.setState({ instruction: markdownExamples.examples[instruction] })}
            />
          </div>
          <div className="cell medium-6">
            <HtmlOutput
              markdown={this.state.inputUIStatus === UI.INSTRUCTIONS ? this.state.instruction : this.state.markdown}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default MarkdownPreviewer;