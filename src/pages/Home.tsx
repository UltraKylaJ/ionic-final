import { IonContent, IonFab, IonFabButton, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useContext, useState } from 'react';
import CompletedTasks from '../components/Completed';
import IncompleteTasks from '../components/Incomplete';
import TaskContext from '../contexts/TaskContext';
import { useDialog } from '../hooks/useDialog';
import './Home.css';

const Home: React.FC = () => {

  let [ newTask, setNewTask ] = useState({
    title: ''
  })

  let { addTask } = useContext(TaskContext);
  const { showPrompt } = useDialog();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="warning">
          <IonTitle>Task List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IncompleteTasks />
        </IonList>
        <IonList>
          <CompletedTasks />
        </IonList>
        <IonFab vertical='bottom' horizontal='end'>
          <IonFabButton color='success' onClick={() => {
              showPrompt(
                'NEW TASK',
                'Enter task here:',
                'Let\'s Go!',
                'Nevermind...'
              ).then(value => {
                setNewTask({title: value});
                console.log(newTask);
                addTask(newTask);
                }
              )
          }} >+</IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
