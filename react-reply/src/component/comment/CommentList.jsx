import React, { Component } from 'react'

class CommentList extends Component {
  state = {
    value: '',
    update: null,
  }

  deleteCmnt = (k) => {
    const { updateList, list } = this.props
    const newList = [...list].filter((v, i) => i !== k)
    updateList(newList)
  }

  clickCmnt = (i) => e => {
    this.setState({
      ...this.state,
      value: e.target.innerHTML,
      update: i,
    })
  }

  onChange = (e) => {
    const { value } = { ...e.target }
    console.log(value)
    this.setState({
      ...this.state,
      value
    })
  }

  onKeyDown = i => e => {
    if (e.key !== 'Enter') return;
    const { updateList, list } = this.props

    const copiedList = [...list]
    copiedList[i].content = this.state.value

    this.setState({
      ...this.state,
      update: null,
    })
    updateList(copiedList)
  }

  bringList = () =>
    this.props.list.map((v, k) => {
      return (
        <ul className='comment-row' key={k}>
          <li className='comment-id'>{v.userid}</li>
          <li className='comment-content'>
            {
              this.state.update === k ?
                <input type="text" className="comment-update-input" value={this.state.value} onChange={this.onChange} onKeyDown={this.onKeyDown(k)} />
                :
                <>
                  <span onClick={this.clickCmnt(k)}>{v.content}</span>
                  <span className='comment-delete-btn' onClick={() => { this.deleteCmnt(k) }}>X</span>
                </>
            }

          </li>
          <li className='comment-date'>
            {v.date}
          </li>
        </ul>
      )
    })

  render() {

    return (
      <li>
        {this.bringList()}
      </li>
    )
  }
}

export default CommentList