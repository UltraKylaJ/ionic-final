import { IonButton, IonCheckbox, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList } from '@ionic/react';
import { trash } from 'ionicons/icons';
import { Key, useContext, useState } from 'react';
import TaskContext from '../contexts/TaskContext';

const CompletedTasks: React.FC = () => {

    let [ task, setTask ] = useState({
        _id: ''
    });

    let { editTask, deleteTask } = useContext(TaskContext);

    function toggle(event: any) {
        setTask({_id: event.target.value});
        console.log(task);
        let id = task._id;
        editTask(id).then(() => {
            window.location.reload();
        }).catch((error: any) => {
            console.log(error);
        })
    }

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
                                        <IonItemSliding>
                                            <IonItem key={t._id}>
                                                <IonCheckbox slot='start' value={t._id} checked={true} onClick={toggle} />
                                                <IonLabel>{t.title}</IonLabel>
                                            </IonItem>
                                            <IonItemOptions side='end'>
                                                <IonButton color='danger' onClick={() => {deleteTask(t._id)}}>
                                                    <IonIcon slot="icon-only" icon={trash}></IonIcon>
                                                </IonButton>
                                            </IonItemOptions>
                                        </IonItemSliding>
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