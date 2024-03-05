import '@xelene/tgui/dist/styles.css';
import './index.css';

import { createRoot } from 'react-dom/client';
import { App } from './App';
import { setBackgroundAsSecondary } from './helpers/setBackgroundAsSecondary';

setBackgroundAsSecondary();

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);
