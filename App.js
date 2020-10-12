import React from 'react';

import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      todos: ['wandi pratama', 'mujahid'],
      text: '',
      checklist : false,
      action : true,
      indexEdit : null
    };
  }

  addDataToArray = () => {
    const {text, todos} = this.state;
    this.setState ({
      todos: [text, ...todos],
    });
    this.setState({text:''})
  };

  removeDataFromArray = (index) => {
    const { todos } = this.state

    this.setState({
      todos : todos.filter((todos,i) => i !== index)
    })
  }

  checklist = () => {
    this.setState({
      checklist: !this.state.checklist
    })
  }

  editData = (index) => {
    const { todos } = this.state
    const data = todos[index]
    this.setState({
      text: data,
      action : !this.state.action,
      indexEdit : index
    })
  }

  actionEditData = () => {
    const { todos, indexEdit,text } = this.state
    const dataEdit = todos.filter((todo, i) => {
      if(i!==indexEdit){
        this.setState({
          todos : [text]
        })
      }
    })
    alert(dataEdit)

  }

  render () {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            height: 40,
            backgroundColor: '#442455',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{color: '#fff', fontSize: 20}}>Todo List</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            alignItems: 'center',
            backgroundColor: '#aeaeae',
            borderRadius: 10,
            margin: 10,
          }}
        >
          <TextInput
            placeholder="Masukan Inputan"
            value={this.state.text}
            style={{marginRight: 10, marginLeft: 10, width: '80%'}}
            onChangeText={inputan => this.setState ({text: inputan})}
          />
          {
            this.state.action ?       <TouchableOpacity onPress={() => this.addDataToArray ()}>
            <Text>Add</Text>
          </TouchableOpacity> : 
          <TouchableOpacity onPress={() => this.actionEditData ()}>
            <Text>Edit</Text>
          </TouchableOpacity>
          }
        </View>
        <ScrollView style={{margin: 10, marginBottom: 0}}>
          {this.state.todos.map ((elements, index) => {
            return (
              <View
                style={{
                  height: 50,
                  backgroundColor: '#671',
                  margin: 5,
                  borderRadius: 5,
                  flexDirection: 'row',
                  alignItems : 'center',
                  justifyContent:'space-around'
                }}
              >
                <TouchableOpacity onPress={() => this.editData(index)}>
                  <Text>Edit</Text>
                </TouchableOpacity>
                <View>
                  <Text>{elements}</Text>
                </View>
                <TouchableOpacity onPress={() => this.removeDataFromArray(index)}>
                  <Text>Hapus</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.checklist()}>
                  <Text>{this.state.checklist ? 'True' : 'False'}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

export default App;
