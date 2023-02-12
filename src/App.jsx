// IMPORTS
import { v4 as randomID} from 'uuid';

// FROM REACT

import { useState } from 'react';

import { useRef } from 'react';

// STYLES

import { Title, Container, ToDoList, Input, Button, ListItem, BackgroundAdvise } from './assets/js/styles.js';

import { FaRocket, FaTrash } from 'react-icons/fa';

import './assets/css/styles.css'


function App() {

  const inputRef = useRef(null);

  // VARIÁVEIS STATE

  const [taskList, setTaskList] = useState([])

  const [task, setTask] = useState('')

  // FUNÇÕES

  function addTask (event) {
    setTask(event.target.value)
  }

  function saveTask() {
    if(task) {
    setTaskList([ ...taskList, {id: randomID(), task, finished: false}]);

    setTask('');
    inputRef.current.value = ''} else {
      alert('É necessário digitar uma tarefa')
    }
  }

  function finishTask(id) {
    const newList = taskList.map( item => (
      item.id === id ? {...item, finished: true} : item
    ))

    setTaskList(newList)
  }

  function deleteItem(id) {
    const newList = taskList.filter(item => item.id !== id)

    setTaskList(newList)
  }

  return (
    <Container>
      <Title>Lista de tarefas</Title>
      <ToDoList>
        <Input className='input' onChange={addTask} placeholder='O que tenho para fazer:' ref={inputRef} ></Input>

        <Button className='button' onClick={() => {saveTask(); setTask('')}}>adicionar</Button>

        <ul>
          {

            taskList.length > 0 ? 
            ( taskList.map(item => (
            
            <ListItem isFinished={item.finished} key={item.id}>
            
            <div className="tooltip">
              < FaRocket className='rocketIcon' onClick={() => finishTask(item.id)} style={{ cursor: item.finished ? 'default' : ''}}/>
               <span className="finish-task-tip" style={{ display: item.finished ? 'none' : ''}}>tarefa concluída</span>
           </div>
           
            <li>{item.task}</li>

            <div className="tooltip">
            <FaTrash className='trash' onClick={() => deleteItem(item.id)} />
            <span className="delete-task-tip">deletar tarefa</span>
            </div>
            </ListItem>
            ))) : <BackgroundAdvise>Não há ítens na lista </BackgroundAdvise>
          }
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
