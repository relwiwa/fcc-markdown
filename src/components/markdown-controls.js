import React from 'react';

import markdownInstructionsStyles from '../styles/markdown-controls.scss';
import UI from '../data/markdown-ui-stati';

const MarkdownControls = (props) => {

  function renderUserInputControls() {
    return (
      <div className="instructions-links grid-x">
        <div className="cell small-6 align-left">
          <a
            onClick={props.onResetInput}
          >Reset</a>
        </div>
        <div className="cell small-6 text-right">
          <a
            onClick={props.onDisplayInstructions}
          >Instructions</a>
        </div>
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
          <a className='card-link no-wrap' onClick={props.onHideInstructions}>Hide Instructions</a>
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
