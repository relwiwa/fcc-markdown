import React from 'react';
import { render } from 'react-dom';

import MarkdownPreviewer from './components/markdown-previewer';

import '../../../styles/global-styles.scss';
import '../../../config/font-awesome';

render(
  <MarkdownPreviewer />,
  document.getElementById('root')
);
