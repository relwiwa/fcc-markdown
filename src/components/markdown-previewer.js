import React, { Component } from 'react';

import markdownExamples from '../data/markdown-example';
import HtmlOutput from './html-output';
import MarkdownInput from './markdown-input';
import MarkdownControls from './markdown-controls';
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

  componentWillUnMount() {
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
      const instruction = this.state.instruction.substring(1);
      const markdown = this.state.markdown + letter;
      const inputUIStatus = instruction.length === 0 ? UI.USER_INPUT : UI.TYPING;
      this.setState({
        markdown,
        instruction,
        inputUIStatus
      });
      this.typingTimeout = setTimeout(() => {
        this.typeIntro();
      }, 200)
    }
  }

  render() {
    return (
      <div className="markdown-previewer row">
        <div className="col-12 col-sm-6">
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
        <div className="col-12 col-sm-6">
          <HtmlOutput
            markdown={this.state.inputUIStatus === UI.INSTRUCTIONS ? this.state.instruction : this.state.markdown}
          />
        </div>
      </div>
    );
  }
};

export default MarkdownPreviewer;