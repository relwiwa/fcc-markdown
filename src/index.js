import React from 'react';
import { render } from 'react-dom';
import MarkdownPreviewer from './components/markdown-previewer';
import './global-styles.scss';

render(
  <MarkdownPreviewer />,
  document.getElementById('root')
);
