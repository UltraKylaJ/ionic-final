import { IonCheckbox, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Key, useState } from 'react';
import TaskContext from '../contexts/TaskContext';

const CompletedTasks: React.FC = () => {
    return (
        <TaskContext.Consumer>
            {
                ({task}) => {
                    return <>
                        <h1>Completed:</h1>
                        {/* {console.log(task)} */}
                        <IonList>
                            {task.map((t: { _id: Key; title: string; completed: boolean }) => {
                                if (t.completed === true) {
                                    // {console.log(task)}
                                    return (
                                        <IonItem key={t._id}>
                                            <IonCheckbox slot='start' value={t.completed} checked={true} />
                                            <IonLabel>{t.title}</IonLabel>
                                        </IonItem>
                                    )
                                }
                            })}
                        </IonList>
                    </>
                }
            }
        </TaskContext.Consumer>
    )
};

export default CompletedTasks;