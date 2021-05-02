import { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
  state = {
    userInfo: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
  }
  removeUserInfo = (index) => {
    const { userInfo } = this.state
    this.setState({
      userInfo: userInfo.filter((item, i) => index !== i)
    })
  }
  addUserInfo = (userObj) => {
    this.setState({ userInfo: [...this.state.userInfo, userObj] })
  }
  render() {
    const { userInfo } = this.state
    return (
      <div className="container">
        <Table userInfo={userInfo} removeUserInfo={this.removeUserInfo} />
        <Form addUserInfo={this.addUserInfo} />
      </div>
    )
  }
}

export default App