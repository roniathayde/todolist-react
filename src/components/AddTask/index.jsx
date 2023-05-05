import { ListChecks } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Tasks } from "../Tasks";

export function AddTask({state}) {

    // console.log('aqui',state.allTasks, state.setAllTasks)

    const {allTasks, setAllTasks, statusAdd, setStatusAdd} = state

    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
  
    function makeATemplateTask(title, description, currentTime, key) {
  
      setAllTasks( tasks => [ ...tasks, { key,title, description,  dateTask:currentTime,status:false} ] )
  
      titleRef.current.value = ""
      descriptionRef.current.value = ""
  
      titleRef.current.focus()  
    
    }
  
    const handleAddTask = useCallback(()=>{    

        if (titleRef.current.value == "" ) {
            alert('please describe your task');
        }
        let data = new Date();
        let dataFormatada = ((String(data.getDate()).padStart(2,0) )) + "/" + (String(data.getMonth() + 1).padStart(2,0)) + "/" + data.getFullYear(); 
    
        let key = Date.now()
        
        makeATemplateTask( titleRef.current.value, descriptionRef.current.value,dataFormatada,key )
        
    },[])
  
    useEffect(()=>{
  
      function entered(e){
        if (e.keyCode === 13) {
          handleAddTask()
        }
      }
  
      window.addEventListener('keyup', entered)
  
      return ()=> window.removeEventListener('keyup', entered)
    },[handleAddTask]);


    return (
      // ADICIONA NOVA TAREFA
      <div className="flex justify-center items-center flex-col ">
        <ListChecks className="text-sky-500" size={42}/>
  
       <div className="container flex flex-col justify-center items-center sm">
          
        { statusAdd &&  <header className="container w-96 animate-fade">

            <h2 className=" text-4xl	mb-4">Add task</h2>

            <div className="mb-4 flex flex-col items-start">
            <label htmlFor='add-item' className="mb-2 text-">Title</label>
            <input ref={titleRef} name="add-item" id="add-item" placeholder="Add item" className="p-2 w-full border-2 border-sky-500 rounded focus:outline-none  "/> 
            </div>

            <div className="mb-4 flex flex-col items-start">
            <label htmlFor='add-item' className="mb-2 text-">Description</label>
            <input ref={descriptionRef} name="add-item" id="add-item" placeholder="Add description" className="p-2 w-full border-2 border-sky-500  rounded focus:outline-none "/> 
            </div>

            <div className=" flex flex-row justify-between items-start">
            
            <button onClick={()=> handleAddTask()}  className="p-2 w-24 rounded-lg bg-sky-400 text-gray-200">Add</button> 
            <button onClick={()=>{setStatusAdd(prev=> !prev)}} className="p-2 w-24 rounded-lg bg-red-600 text-gray-200">Cancel</button> 

            </div>

            </header>
        }
          
  
  
          {/* LISTA DE TAREFAS */}
  
         
  
        </div>
  
  
      </div>
    );
  }