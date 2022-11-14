import { IonButton, IonCheckbox, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList } from '@ionic/react';
import { trash } from 'ionicons/icons';
import { Key, useContext, useState } from 'react';
import TaskContext from '../contexts/TaskContext';

const IncompleteTasks: React.FC = () => {

    let { editTask, deleteTask } = useContext(TaskContext);

    return (
        <TaskContext.Consumer>
            {
                ({task}) => {
                    return <>
                        <h1>Incomplete:</h1>
                        {/* {console.log(task)} */}
                        <IonList>
                            {task.map((t: { _id: Key; title: string; completed: boolean }) => {
                                if (t.completed === false) {
                                    // {console.log(task)}
                                    return (
                                        <>
                                        {/* {console.log(t._id)} */}
                                        <IonItemSliding key={t._id}>
                                            <IonItem color='primary'>
                                                <IonCheckbox slot='start' value={t.completed} checked={false} onClick={() => {editTask(t._id)}} />
                                                <IonLabel>{t.title}</IonLabel>
                                            </IonItem>
                                            <IonItemOptions side='end'>
                                                <IonButton color='tertiary' onClick={() => {deleteTask(t._id)}}>
                                                    <IonIcon slot="icon-only" icon={trash}></IonIcon>
                                                </IonButton>
                                            </IonItemOptions>
                                        </IonItemSliding>
                                        </>
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

export default IncompleteTasks;