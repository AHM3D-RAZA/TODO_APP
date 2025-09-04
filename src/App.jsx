import './App.css'
import { useState } from 'react'
import { Button } from './components/Button'

function App() {
  let [text, setText] = useState("")
  let [tasks, setTasks] = useState([])

  function addTask(){
    setTasks([...tasks, text])
    setText("")
  }

  function deleteTask(id){
    setTasks(tasks.filter(((task, index) => {
     console.log(index)
      return  index != id
      
    })))
    
  }

  function clearList(){
    setTasks([])
  }

  return (
    <div className='bg-black  min-w-screen min-h-screen flex justify-center items-center'>
    
    <section className='bg-gray-800 h-120 w-150 text-white rounded-xl p-1'>
      <h1 className='font-bold text-2xl text-blue-200 text-center mb-3'>TODO App</h1>  
      <div className='flex m-2'>
        <input type="text" value={text} placeholder='Enter your task!' className='w-120 rounded-xl border p-3 my-2 mb-2' onChange={(e)=>{
          setText(e.target.value)
        }}/>
        <Button fn={text.trim()? addTask : ""} text='Add'/>
      </div>
      <div>
          {tasks.map((task, id)=>{
            return (
              <div className='flex justify-between items-center border-2 rounded-xl m-2 bg-gray-800'>
                <p key={id} className='m-2'>
                  {task}
                </p>
                <Button fn={()=>{
                    deleteTask(id)
                  }} text='Delete' />
                </div>
            )
        })}
      </div>
      <Button fn={clearList} text='ClearTasks'/>
    </section>
    </div>
    
)
}

export default App
