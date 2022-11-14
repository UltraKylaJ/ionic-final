import { IonButton, IonCheckbox, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList } from '@ionic/react';
import { trash } from 'ionicons/icons';
import { Key, useContext, useState } from 'react';
import TaskContext from '../contexts/TaskContext';

const IncompleteTasks: React.FC = () => {

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
                                            <IonItem>
                                                <IonCheckbox slot='start' value={t._id} checked={false} onClick={toggle} />
                                                <IonLabel>{t.title}</IonLabel>
                                            </IonItem>
                                            <IonItemOptions side='end'>
                                                <IonButton color='danger' onClick={() => {deleteTask(t._id)}}>
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