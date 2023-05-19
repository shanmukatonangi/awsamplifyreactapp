import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify'; // Import Amplify without default export
import awsconfig from './aws-exports';
import "@aws-amplify/ui-react/styles.css"

Amplify.configure(awsconfig);

ReactDOM.render(
  <AmplifyProvider>
    <App />
  </AmplifyProvider>,
  document.getElementById('root')
);

reportWebVitals();
