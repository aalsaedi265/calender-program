// import logo from './logo.svg';
import React,{useState, useEffect} from 'react'
import './App.css';
import Calendar from './comp/calendar'
import Info from './comp/info'
import List from './comp/list'

function App() {
  const [goals, setGoals,] = useState([{
    date:'',
    time:'',
    taks:''
  }])

  function handleAddTask(x){
    setGoals({...goals, [x.target.id]: x.target.value} )
  }

  return (
    <div className="App">
     
     <h1>Welcome to my Calendar app it is better then a list app but not by much, but better is better</h1>

    <Info handleAddTask={handleAddTask} task={goals} />
    <Calendar handleAddTask={handleAddTask} task={goals}/>
    <List  task={goals}/>


    {/* https://material-ui-pickers.dev/demo/datetime-picker */}
    </div>
  );
}

export default App;
