import React, { Component } from 'react'
import Comment from './component/comment/Comment'
import CommentForm from './component/comment/CommenForm'
import CommentList from './component/comment/CommentList'
import moment from 'moment'

class App extends Component {
  state = {
    list: []
  }

  componentDidMount() {
    console.log('didMount')
    this.setState({
      ...this.state,
      list: [
        { userid: 'leeyj', content: '안녕하세요', date: '22-04-24' },
        { userid: 'leeyj2', content: '안녕하세요2', date: '22-04-25' },
        { userid: 'leeyj3', content: '안녕하세요3', date: '22-04-26' },
      ]
    })
  }

  addList = (cmnt) => {
    this.setState({
      ...this.state,
      list: [...this.state.list,
      {
        userid: 'leeyj6161',
        content: cmnt,
        date: moment().format('YY-MM-DD hh:mm')
      }
      ]
    })
  }

  updateList = (list) => {
    this.setState({
      ...this.state,
      list
    })
  }

  render() {
    return (
      <>
        <Comment>
          <CommentForm addList={this.addList} />
          <CommentList list={this.state.list} updateList={this.updateList} />
        </Comment>
      </>
    )
  }
}

export default App