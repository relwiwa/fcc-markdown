import React from 'react';

import markdownInstructionsStyles from '../styles/markdown-controls.css';
import UI from '../data/markdown-ui-stati';

const MarkdownControls = (props) => {

  function renderUserInputControls() {
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

  function renderInstructionsControls() {
    return (
      <div className="instructions-links text-center">
        <p>
          {props.instructionCategories.map((category) => {
            return (
              <span key={category}>
                <a
                  href='#'
                  onClick={() => props.onUpdateInstructions(category)}
                >
                  {category[0].toUpperCase() + category.substr(1)}
                </a>
                <span> </span>
              </span>
            );
          })}
        </p>
        <p>
          <a href='#' className='card-link no-wrap' onClick={props.onHideInstructions}>Hide Instructions</a>
        </p>
      </div>
    );
  }

  return (
    <div className="markdown-controls">
      {props.inputUIStatus === UI.USER_INPUT && renderUserInputControls()}
      {props.inputUIStatus === UI.INSTRUCTIONS && renderInstructionsControls()}
    </div>
  );
};

export default MarkdownControls;
