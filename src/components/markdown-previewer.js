import React, { Component } from 'react';

import HtmlOutput from './html-output';
import MarkdownInput from './markdown-input';

class MarkdownPreviewer extends Component {
  constructor() {
    super();
    this.state = {
      markdown: 'Enter **Github**-*flavored* ***Markup*** and see it transform to \`HTML\`'
    };
  }

  handleChange(event) {
    this.setState({
      markdown: event.target.value
    });
  }

  render() {
    return (
      <div className="app-component row">
        <div className="col-sm-6">
          <MarkdownInput
            markdown={this.state.markdown}
            handleChange={this.handleChange.bind(this)}
          />
        </div>
        <div className="col-sm-6">
          <HtmlOutput
            markdown={this.state.markdown}
          />
        </div>
      </div>
    );
  }
};

export default MarkdownPreviewer;