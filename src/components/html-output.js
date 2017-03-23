import React from 'react';
import marked from 'marked';

marked.setOptions({
  sanitize: true,
});

const HtmlOutput = (props) => {
  let text = {
    __html: marked(props.markdown)
  };

  return (
    <div className="html-output">
      <h4 className="my-4 text-center">HTML Output</h4>
      <p
        dangerouslySetInnerHTML={text}
      >
      </p>
    </div>
  );
};

export default HtmlOutput;