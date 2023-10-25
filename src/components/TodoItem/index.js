import './index.css'

const Todoitem = props => {
  const {userItems, deleteSingleUser} = props
  const {id, title} = userItems

  const deleteUser = () => {
    deleteSingleUser(id)
  }

  return (
    <li className="list">
      <p>{title}</p>
      <button type="button" className="btn" onClick={deleteUser}>
        Delete
      </button>
    </li>
  )
}

export default Todoitem
