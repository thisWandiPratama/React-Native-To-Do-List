import React, { Component } from 'react'
import { View} from 'react-native'

import List from './src/component/screenTodoList/List'
import Input from './src/component/screenTodoList/Input'
import Title from './src/component/screenTodoList/Title'

export default class App extends Component {

  state = {
    todos: ['Wandi Pratama'],
  }

  onAddTodo = (text) => {
    const {todos} = this.state

    this.setState({
      todos: [text, ...todos],
    })
  }

  onRemoveTodo = (index) => {
    const {todos} = this.state

    this.setState({
      todos: todos.filter((todo, i) => i !== index),
    })
  }

  render() {
    const {todos} = this.state

    return (
      <View>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Masukan Catatan Anda'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
      </View>
    )
  }
}
