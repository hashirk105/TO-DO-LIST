import React, { useState } from 'react';
import {TextInput, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';



import {

  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable

} from 'react-native';


export default function App(){
  const [task, setTask] = useState('');
const [taskList, setTaskList] = useState([]);
const [editIndex, setEditIndex] = useState(-1);

const handleAddTask = () => {
  if (task !== '') {
    if (editIndex !== -1) {
      const newTaskList = [...taskList];
      newTaskList[editIndex] = task;
      setTaskList(newTaskList);
      setEditIndex(-1);
    } else {
      setTaskList([...taskList, task]);
    }
    setTask('');
  }
};


const handleDeleteTask = (index) => {
  const newTaskList = [...taskList];
  newTaskList.splice(index, 1);
  setTaskList(newTaskList);
};

const handleEditTask = (index) => {
  setEditIndex(index);
  setTask(taskList[index]);
};
  return(
    <View> 
    
      <StatusBar backgroundColor="blue">  </StatusBar>
      <View style={styles.container}>
      <Text style={styles.txt}>To Do List </Text>
      </View>
      
    <View style = {styles.flx}>
       
        <TextInput
          label="Add an Item"
          style={styles.txtin}
          right={<TextInput.Icon icon="cloud-upload" size={30} color="#900" />} 
          onChangeText={(text) => setTask(text)}
          />
       
        <Button
          style={styles.btn} onPress={handleAddTask}> 
          <Text style={{color:"black", fontSize:15 } }
         >  {editIndex !== -1 ? 'Update' : 'Add'} Item </Text> 
        </Button>

        </View>


        {taskList.map((item, index) => (
        <View key={index} style={styles.view1}>
        <View style={{width:200}}> 
          <Text style={styles.taskText}
          numberOfLines={3}
          onPress={() => handleEditTask(index)} >
            {index + 1}. {item}
          </Text>
          </View>
         
            <View>
            <TouchableOpacity
              style={styles.view}
            >
            <Icon style={{justifyContent:'center', marginBottom:17}} 
            size={30} color="green" name="trash" onPress={() => handleDeleteTask(index)}   > </Icon>
              <Text></Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      </View>
    

  );
}

const styles = StyleSheet.create({

  container:{
    height: '30%',
    backgroundColor:'lightblue',
    justifyContent:'center',

  },

  txt:{
    alignContent: 'center',
    textAlign: 'center',
    fontSize: 30,
  },

  flx:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop:30,
  },

  txtin:{
    width:'50%',
    marginLeft:15,
    borderWidth:1,
    backgroundColor:'white',
    justifyContent:"center",
    borderRadius:5


  },
  btn:{
    width:150,
    padding:3,
    backgroundColor:'lightgrey',
    textcolor:'white',
  
  },
  view1:{
    flexDirection:'row',
    padding:1,
    margin:20,
    borderWidth:1,
    borderRadius:8,
    height:60
  },
  view:{
    
    marginLeft:100,
    marginTop:10,
    
  },
  
  taskText:{
    fontSize:20,
    marginTop:15,
  },
 
});
    