import { useCallback, useEffect, useRef, useState } from "react";


export function EditTask({state}) {

    const {allTasks, setAllTasks, statusEdit, setStatusEdit,titleEditRef, descriptionEditRef } = state

    console.log('edit',statusEdit)
    // titleEditRef.current.value = '';
    // descriptionEditRef.current.value = ''; 


    return (
      // ADICIONA NOVA TAREFA
      <div className="flex justify-center items-center flex-col ">
         
       <div className="container flex flex-col justify-center items-center sm">
          
        { statusEdit &&  <header className="container w-96 animate-fade">

            <h2 className=" text-4xl	mb-4">Edit</h2>

            <div className="mb-4 flex flex-col items-start">
            <label htmlFor='add-item' className="mb-2 text-">Title</label>
            <input ref={titleEditRef} name="add-item" type="text"  id="add-item" placeholder="Add item" className="p-2 w-full border-2 border-sky-500 rounded focus:outline-none  "/> 
            </div>

            <div className="mb-4 flex flex-col items-start">
            <label htmlFor='add-item' className="mb-2 text-">Description</label>
            <input ref={descriptionEditRef} name="add-item" type="text"  id="add-item" placeholder="Add description" className="p-2 w-full border-2 border-sky-500  rounded focus:outline-none "/> 
            </div>

            <div className=" flex flex-row justify-between items-start">
            
            <button onClick={()=> console.log('')}  className="p-2 w-24 rounded-lg bg-sky-400 text-gray-200">Edit task</button> 
            <button onClick={()=>{setStatusEdit(prev=> !prev)}} className="p-2 w-24 rounded-lg bg-red-600 text-gray-200">Cancel</button> 

            </div>

            </header>
        }
  
        </div>
  
  
      </div>
    );
  }