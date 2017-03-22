import React from 'react';
import { render } from 'react-dom';
import MarkdownPreviewer from './components/markdown-previewer';
import styles from '../styles/style.css';

render(
  <MarkdownPreviewer />,
  document.getElementById('root')
);
