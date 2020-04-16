import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
  <div class="card" style={{margin: "15px",textDecoration: completed ? 'line-through' : 'none'}}
    onClick={onClick}
  >
  <div className="card-body">
    <h5 className="card-title">Subject</h5>
    <h6 className="card-subtitle mb-2 text-muted">Assigned to : Hashfi</h6>
    <p className="card-text">description :</p>
    <p className="card-text">{text}</p>
    <i className="text-muted">time : yyyy-mm-dd</i>
  </div>
</div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo