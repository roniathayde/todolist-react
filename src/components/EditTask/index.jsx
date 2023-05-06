import { useContext } from "react";
import { GlobalContext } from "../../contexts/EditComponentContext";


export function EditTask({state}) {


    const  {  editedTask, setContextEditTask } = useContext(GlobalContext);  

    const { allTasks, setAllTasks, statusEdit, setStatusEdit, titleEditRef, descriptionEditRef } = state
    
    const applyEditTask = ()=>{

        console.log(editedTask)

        console.log(titleEditRef.current.value)
        console.log(descriptionEditRef.current.value)

        setAllTasks(prev=> {

            console.log(prev)

            prev.forEach( el => {
                
                console.log(el)

                if ( el.key == editedTask ) {

                    el.title = titleEditRef.current.value;
                    el.description = descriptionEditRef.current.value;

                }

            })

            return prev
        })


    }


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
            
            <button onClick={()=> applyEditTask()}  className="p-2 w-24 rounded-lg bg-sky-400 text-gray-200">Edit task</button> 
            <button onClick={()=>{setStatusEdit(prev=> !prev)}} className="p-2 w-24 rounded-lg bg-red-600 text-gray-200">Cancel</button> 

            </div>

            </header>
        }
  
        </div>
  
  
      </div>
    );
  }