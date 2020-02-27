import React, {useState, useEffect} from 'react';
import { Form, Card, Icon, Image } from 'semantic-ui-react'
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

  //GET USER DATA
  useEffect(()=>{
    fetch("https://api.github.com/users/example")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setData(data)
    })
  }, []);

  //Set state
  const setData = ({ name, login, followers, following, public_repos, avatar_url }) => {
    setUserName(name)
    setUserName(login)
    setFollowers(followers)
    setFollowing(following)
    setRepos(public_repos)
    setAvatar(avatar_url)
  }


  return (
    <div>

      <div className="navbar"> Github search </div>
        <div className="search">
          <Form>
            <Form.Group>
              <Form.Input placeholder='Github user' name='github user' />
              <Form.Button content='search'/>
            </Form.Group>
          </Form>
        </div>

        <div className="card">
          <Card>
            <Image src='https://avatars1.githubusercontent.com/u/57936?v=4' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta> <span className='date'>Joined in 2015</span> </Card.Meta>
                <Card.Description> Matthew is a musician living in Nashville. </Card.Description>
              </Card.Content>
            <Card.Content extra>
              <a> <Icon name='user' /> 22 Friends </a>
            </Card.Content>
          </Card>
        </div>

    </div>
  );
}

export default App;
