import './App.css'
import { useState } from 'react'
import { Button } from './components/Button'
import { useOutletContext } from 'react-router'

function App() {
  let [taskData, setTaskData] = useState({
      text: "",
      date: "",
      priority: "High"
    })
  let {tasks, setTasks} = useOutletContext();

  function addTask(){
    if(!taskData.text.trim()) return
    setTasks([taskData, ...tasks])
    setTaskData({
      text: "",
      date: "",
      priority: "High"
    })
  }

  return (
    <div className='bg-gray-950 min-h-screen flex justify-center items-center'>
    
      <section className='bg-gray-800 w-150 text-white rounded-xl p-4 shadow-lg'>
        <h1 className='font-bold text-2xl text-blue-200 text-center mb-6'>Add Task</h1>  

        <div className='space-y-1'>

          <div className='flex items-center'>
            <label htmlFor="task" className=''> Title:   
            <input type="text" value={taskData.text} placeholder='Enter your task!' className='w-120 rounded-xl border p-3 m-2' onChange={(e)=>{
            setTaskData({...taskData, text: e.target.value})
          }}/></label>
          </div>
          
          <div className='flex items-center'>
            <label htmlFor="date"> Date:    
            <input type='date' value={taskData.date} placeholder='Enter task completion date' className='w-120 rounded-xl border p-3 m-2' onChange={(e)=>{
            setTaskData({...taskData, date: e.target.value})
          }}/></label>
          </div>
          
          <div className='flex items-center'>
            <label htmlFor="priority"> Priority: 
              <select value={taskData.priority} 
                      onChange={(e)=>setTaskData({...taskData, priority: e.target.value})} 
                      className='w-120 rounded-xl border p-3 m-2'>
                <option value="High" className='bg-gray-700'>High</option>
                <option value="Med" className='bg-gray-700'>Medium</option>
                <option value="Low" className='bg-gray-700'>Low</option>
              </select>
            </label>
          </div>
          
          <div className='flex justify-end'>
            <Button fn={addTask} text='Add'/>
          </div>
          
        </div>
      </section>
    </div>
)
}

export default App
