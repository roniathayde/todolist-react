import { Check, Edit, Trash, X } from "lucide-react"
import { GlobalContext } from "../../contexts/EditComponentContext";
import { useContext } from "react";

export function Task ( {state: {key,title,dateTask,status,allTasks, setAllTasks, statusEdit,setStatusEdit, titleEditRef, descriptionEditRef}} ) {



    const  {  editedTask, setContextEditTask } = useContext(GlobalContext);  


    

    function handleStatusTask( key ){
  
      setAllTasks( tasks => {
        tasks.forEach((task) => {
  
          if ( task.key === key) {
            return [...tasks, task.status = !task.status]
          }
  
        })
  
        return [...tasks]
      } )
  
    }
  
    const handleRemoveTask = (key)=> {
      setAllTasks(prevAllTasks => prevAllTasks.filter(tasks => tasks.key != key))
    }

    function handleStatusEditTask( key ){
        
        setContextEditTask(prev=>{
            
            prev = key
            
            console.log('context', prev)

            return prev
        });

        setAllTasks( tasks => {
          tasks.forEach((task) => {
            
              if ( task.key === key ) {

                titleEditRef.current.value = task.title
                descriptionEditRef.current.value  = task.description

              return [...tasks ]
            }
      
          })
      
          return [...tasks]
        } )
      
      }
  
    return (
  
      <li key={key} data-status={status}  id={key} className="p-2 rounded mb-4 bg-slate-300 flex flex-row justify-between items-center">
  
          <div className='flex gap-x-2'>
  
            <div onClick={ (event)=> handleStatusTask(key,event) } className="rounded p-2 bg-slate-100 w-8 flex flex-row justify-center items-center cursor-pointer">
              { status && <Check className='text-green-500 font-bold'/>}
              {!status && <X className='text-red-500 font-bold'/> }
            </div> 
  
            <div onClick={ ()=> handleRemoveTask(key) } className="rounded p-2 bg-slate-100 w-8 flex flex-row justify-center items-center cursor-pointer">
  
              <Trash className='text-gray-950 font-bold'/>
             
            </div> 
  
            <div onClick={ ()=> { setStatusEdit(prev=> { setTimeout(()=> {
                handleStatusEditTask(key);},400);  
                    if (prev) {
                        return prev
                    }
                    return !prev
                } );  }
                
            } className="rounded p-2 bg-slate-100 w-8 flex flex-row justify-center items-center cursor-pointer">
  
              <Edit className='text-gray-950 font-bold'/>
             
            </div> 
  
          </div> 
  
          <div>
            <p className="text-gray-700">{status}{dateTask}</p>
          </div>
  
          <div>
            <p>{title}</p>
          </div>
        </li>
  
    );
  }