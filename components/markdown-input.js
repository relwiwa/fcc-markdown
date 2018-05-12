import React from 'react';

const MarkdownInput = (props) => {
  return (
    <div className="markdown-input">
      <h4 className="text-center">Markdown Input</h4>
        <textarea
          name="markdown-input"
          className="form-control"
          rows="10"
          placeholder="Input Github-flavored Markdown"
          value={props.markdown}
          onChange={props.onChange}
          onFocus={props.onFocus}
        />
    </div>
  );
}

export default MarkdownInput;