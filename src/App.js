import { useRef, useState } from 'react';
import { AddTask } from './components/AddTask';
import { EditTask } from './components/EditTask';
import { Tasks } from './components/Tasks';



function App() {
  const [allTasks, setAllTasks] = useState([]);
  
  const [statusAdd, setStatusAdd] = useState(false);
  const [statusEdit, setStatusEdit] = useState(false);

  const titleEditRef = useRef(null);
  const descriptionEditRef = useRef(null);
  
  return (
      <article className="flex flex-col justify-center items-center">
        <AddTask state={{allTasks, setAllTasks, statusAdd, setStatusAdd}}/>
        <Tasks state={ {allTasks, setAllTasks, setStatusAdd, statusEdit, setStatusEdit, titleEditRef, descriptionEditRef} } />
        <EditTask state={{allTasks, setAllTasks, statusEdit, setStatusEdit, titleEditRef, descriptionEditRef}}/>
      </article>
  );
}

export default App;
