import { Component } from 'react'

class Form extends Component {
  initState = {
    name: '',
    job: ''
  }
  state = {
    ...this.initState
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  submitForm = () => {
    this.props.addUserInfo(this.state)
    this.setState(this.initState)
  }
  render() {
    const { name, job } = this.state
    return (
      <form action="#">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={this.handleChange} />
        <label htmlFor="job">job</label>
        <input type="text" name="job" id="job" value={job} onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    )
  }
}

export default Form