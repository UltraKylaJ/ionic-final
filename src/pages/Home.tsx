import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CompletedTasks from '../components/Completed';
import IncompleteTasks from '../components/Incomplete';
// import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {

  // incompleteTasks[]

  // completeTasks[]

  // displayIncomplete

  // displayComplete

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Task List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IncompleteTasks />
        <CompletedTasks />
        {/* addTask button footer floating */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
