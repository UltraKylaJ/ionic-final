import { IonButton, IonContent, IonFooter, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useContext, useState } from 'react';
import CompletedTasks from '../components/Completed';
import IncompleteTasks from '../components/Incomplete';
import TaskContext from '../contexts/TaskContext';
import { useDialog } from '../hooks/useDialog';
import './Home.css';

const Home: React.FC = () => {

  let [ newTask, setNewTask ] = useState({
    title: 'newTask',
    completed: false
  })

  let { addTask } = useContext(TaskContext);
  const { showAlert, showConfirm, showPrompt } = useDialog();

  const prompt = async () => {
    showPrompt('New Task!', 'What\'s your new task?').then(newTask => {
      console.log('New Task: ' + newTask);
      addTask(newTask);
    });
}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
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
        <IonToolbar>
          <IonFooter>
            <IonButton onClick={ prompt } >+</IonButton>
          </IonFooter>
        </IonToolbar>
      </IonContent>
    </IonPage>
  );
};

export default Home;
