import React, {useState, useEffect} from 'react';
import { Form, Card, Icon, Image } from 'semantic-ui-react'
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState('');

  //GET USER DATA
  useEffect(()=>{
    fetch("https://api.github.com/users/drmartirosian")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setData(data)
    })
  }, []);

  //Set data state
  const setData = ({ name, login, followers, following, public_repos, avatar_url }) => {
    setName(name)
    setUsername(login)
    setFollowers(followers)
    setFollowing(following)
    setRepos(public_repos)
    setAvatar(avatar_url)
  }

  //change user input to "event" in searchbox
  const handleSearch = (event) => {
    setUserInput(event.target.value)
  }
  //Trigger setData with userInput when button clicked
  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }


  return (
    <div>

      <div className="navbar"> Github search </div>
        <div className="search">
          <Form>
            <Form.Group>
              <Form.Input placeholder='Github user' name='github user' onChange={handleSearch} />
              <Form.Button content='search' onClick={handleSubmit} />
            </Form.Group>
          </Form>
        </div>

        <div className="card">
          <Card>
            <Image src={avatar} wrapped ui={false} />

            <Card.Content>
              <Card.Header>{name}</Card.Header>
              <Card.Header>{userName}</Card.Header>
            </Card.Content>

            <Card.Content extra>
              <a> <Icon name='user' /> {followers} followers</a>
            </Card.Content>
            <Card.Content extra>
              <a> <Icon name='user' /> {repos} repos</a>
            </Card.Content>
            <Card.Content extra>
              <a> <Icon name='user' /> {following} following</a>
            </Card.Content>

          </Card>
        </div>

    </div>
  );
}

export default App;
