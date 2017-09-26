import React, { Component } from 'react';

const urlforUsername = username => `https://api.github.com/users/${username}`

class GitHub extends Component {
  constructor(props){
    super(props)
    this.state = {
      requestFailed: false
    }
  }

  componentDidMount(){
    fetch(urlforUsername(this.props.username))
      .then(response => {
        if (!response.ok) {
          throw Error("Network Request Failed")
        }

        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          githubData: d
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  render() {
    if (this.state.requestFailed) return <p>Failed</p>
    if (!this.state.githubData) return <p>Loading...</p>
    return (
      <div>
            <h4>login: {this.state.githubData.login}</h4>
            <h4>id: {this.state.githubData.id}</h4>
            <h4>gravatar_id: {this.state.githubData.gravatar_id}</h4>
            <h4>blog: {this.state.githubData.blog}</h4>
            <h4>Name: {this.state.githubData.name}</h4>
            <h4>Followers: {this.state.githubData.followers}</h4>
            <h4>Following: {this.state.githubData.following}</h4>
      </div>
    );
  }
}

export default GitHub;
