import { IonCheckbox, IonItem, IonLabel, IonList } from '@ionic/react';
import { Key, useContext, useState } from 'react';
import TaskContext from '../contexts/TaskContext';

const IncompleteTasks: React.FC = () => {

    let [ tasked, setTasked ] = useState({
        _id: ""
    });

    let { editTask } = useContext(TaskContext);

    // function handleChange(event: any) {
    //     setTasked((prevValue) => {
    //         return { ...prevValue, [event.target._id]: event.target.value}
    //     })
    // }

    // const handleChange = (e: any) => {
    //     const id = e.target._id;
    //     setTasked(id);
    //     console.log(id);
    //     console.log(tasked);
    // }

    function toggle(event: any) {
        setTasked({_id: event.target.value});
        console.log(tasked);
        let id = tasked._id;
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
                                        {console.log(t._id)}
                                        <IonItem key={t._id}>
                                            <IonCheckbox slot='start' value={t._id} checked={false} onClick={toggle} />
                                            <IonLabel>{t.title}</IonLabel>
                                        </IonItem>
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