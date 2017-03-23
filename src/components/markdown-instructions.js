import React from 'react';
import markdownInstructionsStyles from '../styles/markdown-instructions.css';

const MarkdownInstructions = (props) => {

  function renderControls() {
    if (props.typingDone && !props.displayInstructions) {
      return (
      <div className="instructions-links">
        <a
          href='#'
          onClick={props.onResetInput}
        >Reset</a>
        <a
          href='#'
          onClick={props.onDisplayInstructions}
          className='pull-right'
        >Instructions</a>
      </div>
      );
    }
    else {
      return null;
    }
  }

  function renderInstructions() {
    if (props.typingDone && props.displayInstructions) {
      const instructions = Object.keys(props.markdownExample.examples);
      return (
        <div className="instructions-links text-center">
          {instructions.map((instruction) => {
            return (
              <span key={instruction}>
                <a
                  href='#'
                  onClick={() => props.onUpdateInstructions(instruction)}
                >
                  {instruction[0].toUpperCase() + instruction.substr(1)}
                </a>
                <span> </span>
              </span>
            );
          })}
          <br />
          <a href='#' className='card-link no-wrap' onClick={props.onHideInstructions}>Go back</a>
        </div>
      );
    }
    else {
      return null;
    }
  }

  return (
    <div className="markdown-instructions-component">
      {renderControls()}
      {renderInstructions()}
    </div>
  );
};

export default MarkdownInstructions;