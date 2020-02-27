import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import { Form } from 'semantic-ui-react'
import './App.css';

function App() {
  const [name] = useState('');
  const [userName, setUserName] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState('');

  return (
    <div>
      <div className="navbar"> Github search </div>
      <div classname="search">
        <Form>
          <Form.Group>
            <Form.Input placeholder='Name' name='name' />
            <Form.Button content='Submit'/>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default App;
