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
    fetch("https://api.github.com/users/example")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      //If error, drop error message instead
      if ( data.message ){
        setError( data.message );
      } else {
        setData( data );
        //reset error from state
        setError(null);
      }
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
        if (data.message){
          setError(data.message)
        }else{
          setData(data)
          //reset error state after every search
          setError(null)
        }
      })
  }

//https://api.github.com/repos/drmartirosian/yougit/commits


  return (
    <div className="App">

      <div className="navbar">
        <span className="title">
          <Icon className="giticon" name="github alternate" />
          <span>You</span>
          <strong className="git">Git</strong>
        </span>
      </div>

        <div className="search">
          <Form>
            <Form.Group>
              <Form.Input placeholder='Github user' name='github user' onChange={handleSearch} />
              <Form.Button /* content='search' */ onClick={handleSubmit}>
                <Icon name="search"/>
              </Form.Button>
            </Form.Group>
          </Form>
        </div>

        {error ? (
          <h1>{error}</h1>
        ) : (
          <div className="card">
            <Card>
              <Image src={avatar} wrapped ui={false} />

              <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Header> <Icon name='user' /> {userName} </Card.Header>
              </Card.Content>

              <Card.Content extra>
                <p> <Icon name='thumbs up outline' /> {followers} followers</p>
              </Card.Content>

              <Card.Content extra>
                <p> <Icon name='thumbs up' /> following {following} </p>
              </Card.Content>

              <Card.Content extra>
                <p> <Icon name='folder open outline' /> {repos} repo(s)</p>
              </Card.Content>

            </Card>
          </div>
        )}

    </div>
  );

}

export default App;
