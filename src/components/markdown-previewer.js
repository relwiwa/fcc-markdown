import React, { Component } from 'react';

import markdownExample from '../data/markdown-example';
import HtmlOutput from './html-output';
import MarkdownInput from './markdown-input';
import MarkdownInstructions from './markdown-instructions';

class MarkdownPreviewer extends Component {
  constructor() {
    super();
    this.state = {
      markdown: '',
      instructions: markdownExample.intro,
      typingDone: false,
      displayInstructions: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDisplayInstructions = this.handleDisplayInstructions.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleHideInstructions = this.handleHideInstructions.bind(this);
    this.handleResetInput = this.handleResetInput.bind(this);
    this.handleUpdateInstructions = this.handleUpdateInstructions.bind(this);
  }

  componentDidMount() {
    this.typeIntro();
  }

  componentWillUnMount() {
    clearTimeout(this.typingTimeout);
  }

  handleChange(event) {
    if (!this.state.displayInstructions) {
      this.setState({
        markdown: event.target.value
      });
    }
  }

  handleDisplayInstructions() {
    this.setState({
      displayInstructions: true
    });
  }

  handleFocus(event) {
    if (!this.state.typingDone) {
      clearTimeout(this.typingDone);
      this.setState({
        typingDone: true,
        markdown: '',
        instructions: markdownExample.intro,
        displayInstructions: false,
      });
    }
  }

  handleHideInstructions() {
    this.setState({
      displayInstructions: false
    });
  }

  handleResetInput() {
    this.setState({
      markdown: ''
    });
  }

  handleUpdateInstructions(instructions) {
    this.setState({
      instructions: markdownExample.examples[instructions]
    });
  }

  typeIntro() {
    if (!this.state.typingDone) {
      const letter = this.state.instructions[0];
      const instructions = this.state.instructions.substring(1);
      const markdown = this.state.markdown + letter;
      const typingDone = instructions.length === 0 ? true : false;
      this.setState({
        markdown,
        instructions,
        typingDone
      });
      this.typingTimeout = setTimeout(() => {
        this.typeIntro();
      }, 200)
    }
  }

  render() {
    return (
      <div className="markdown-previewer-component row">
        <div className="col-12 col-sm-6">
          <MarkdownInput
            markdown={this.state.displayInstructions ? this.state.instructions : this.state.markdown}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
          />
          <MarkdownInstructions
            typingDone={this.state.typingDone}
            markdownExample={markdownExample}
            displayInstructions={this.state.displayInstructions}
            onDisplayInstructions={this.handleDisplayInstructions}
            onHideInstructions={this.handleHideInstructions}
            onResetInput={this.handleResetInput}
            onUpdateInstructions={this.handleUpdateInstructions}
          />
        </div>
        <div className="col-12 col-sm-6">
          <HtmlOutput
            markdown={this.state.displayInstructions ? this.state.instructions : this.state.markdown}
          />
        </div>
      </div>
    );
  }
};

export default MarkdownPreviewer;