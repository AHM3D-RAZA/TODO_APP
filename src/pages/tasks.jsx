import { useOutletContext } from "react-router"
import { Button } from "../components/Button"

function Tasks(){
    let {tasks, setTasks} = useOutletContext()

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
      <div className='bg-gray-950 min-h-screen flex justify-center items-center'>
    
      <section className='bg-gray-800 w-150 text-white rounded-xl p-4 shadow-lg'>
        <div>
          {tasks.map((task, id)=>{
            return (
              <div
                key={id}
                className="flex justify-between items-center border border-gray-600 rounded-lg m-2 p-4 bg-gray-800 shadow-md hover:shadow-lg transition"
              >
                <div className="flex flex-col text-gray-200">
                  <span className="font-semibold text-lg">{task.text}</span>
                  <span className="text-sm text-gray-400">{task.date}</span>
                  <span
                    className={"text-sm mt-1 px-2 py-1 rounded-full w-fit"}
                  >
                    {task.priority} Priority Task
                  </span>
                </div>
                <Button
                  fn={() => deleteTask(id)}
                  text="Delete"
                />
              </div>

            )
        })}
        </div>
        <div className="flex justify-end">
          <Button fn={clearList} text='ClearTasks'/>
        </div>
      
      </section>
      </div>
    )
}

export default Tasks