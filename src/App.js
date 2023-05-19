import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App({signOut , user}) {
  return (
    <div className="App">
      <h1>Hello</h1>
     <h3>{user.attributes.email}</h3>
     
     <button onClick={signOut}>Signout</button>
     
    </div>
  );
}

export default withAuthenticator(App);
