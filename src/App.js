import { useRef, useState } from 'react';
import { AddTask } from './components/AddTask';
import { EditTask } from './components/EditTask';
import { Tasks } from './components/Tasks';
import { GlobalContext, EditedTask } from './contexts/EditComponentContext';



function App() {
  const [allTasks, setAllTasks] = useState([]);
  
  const [statusAdd, setStatusAdd] = useState(false);
  const [statusEdit, setStatusEdit] = useState(false);

  const [editedTask,setContextEditTask] = useState(EditedTask)


  const titleEditRef = useRef(null);
  const descriptionEditRef = useRef(null);
  
  return (
      <article className="flex flex-col justify-center items-center">
        <GlobalContext.Provider value={ {editedTask,setContextEditTask} }>

          <AddTask state={{allTasks, setAllTasks, statusAdd, setStatusAdd}}/>
          <Tasks state={ {allTasks, setAllTasks, setStatusAdd, statusEdit, setStatusEdit, titleEditRef, descriptionEditRef} } />
          <EditTask state={{allTasks, setAllTasks, statusEdit, setStatusEdit, titleEditRef, descriptionEditRef}}/>

        </GlobalContext.Provider>
      </article>
  );
}

export default App;
