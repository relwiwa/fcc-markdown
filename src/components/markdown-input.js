import React from 'react';

const MarkdownInput = (props) => {

  return (
    <div className="markdown-input-component">
      <h4 className="my-4 text-center">Markdown Input</h4>
      <div className="card">
        <div className="card-block p-0">
          <textarea
            name="markdown-input"
            className="form-control"
            rows="5"
            placeholder="Input Github-flavored Markdown"
            value={props.markdown}
            onChange={props.handleChange}
            onFocus={props.handleFocus}
          />
        </div>
      </div>
    </div>
  );
}

export default MarkdownInput;