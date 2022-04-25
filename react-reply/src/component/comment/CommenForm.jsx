import React, { Component } from 'react'

class CommentForm extends Component {
  state = {
    value: ''
  }
  onChange = (e) => {
    const { value } = { ...e.target }
    this.setState({
      value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { value } = this.state
    this.props.addList(value)
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <li className='comment-form'>
        <form onSubmit={this.onSubmit}>
          <span className='ps_box'>
            <input type="text" value={this.state.value} onChange={this.onChange} placeholder="내용을 입력해주세요" />
          </span>
          <input type="submit" value='ok' className='btn' />
        </form>
      </li>
    )
  }
}

export default CommentForm