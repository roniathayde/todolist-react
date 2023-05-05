import {Plus} from 'lucide-react';

import { Task } from "../Task";



export function Tasks({state: {allTasks, setAllTasks, setStatusAdd, statusEdit,setStatusEdit, titleEditRef, descriptionEditRef} }) {
    
    return ( 
    <article className='container flex flex-col  w-96 mt-8'>
  
        <h2 className="text-4xl">List tasks</h2>
  
        <ul className="mt-4">
        
            {allTasks.length > 0 && 
                allTasks.map(({key,title,dateTask,status})=>(
                    <Task key={key} state={ {key,title,dateTask,status, allTasks, setAllTasks, statusEdit,setStatusEdit, titleEditRef, descriptionEditRef} }/>
            ))}

            { allTasks.length === 0 && <p>Free day, no more tasks!</p>} 
  
        </ul>

        <div onClick={() => {  setStatusAdd(prev=> !prev) } } className="rounded-full self-center p-2 w-10 bg-sky-400  flex flex-row justify-center items-center cursor-pointer">

            <Plus  className="text-white"/>
                
        </div> 

  
    </article>
    );
  
  }