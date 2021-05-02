import { Component } from 'react'

const TableHeader = () => (
  <thead>
    <tr>
      <th>Name</th>
      <th>Job</th>
      <th>Remove</th>
    </tr>
  </thead>
)

const TableBody = (props) => {
  const rows = props.userInfo.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.job}</td>
        <td>
          <button onClick={() => { props.removeUserInfo(index) }}>DELETE</button>
        </td>
      </tr>
    )
  })

  return (
    <tbody>
      {rows}
    </tbody>
  )
}

class Table extends Component {
  render() {
    const { userInfo, removeUserInfo } = this.props
    return (
      <table>
        <TableHeader />
        <TableBody userInfo={userInfo} removeUserInfo={removeUserInfo} />
      </table>
    )
  }
}

export default Table
