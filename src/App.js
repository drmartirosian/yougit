import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
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
     <h1>hello</h1>
    </div>
  );
}

export default App;
