import * as React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from '../ToDoForm/ToDoForm.css';


// tslint:disable-next-line: interface-name
interface ToDoFormProps {
    title?: string;
    effort?: number;
    className?: string;
    Placeholder?: string;
    onChange?:  (e:React.ChangeEvent<HTMLInputElement>) => void; 
    text?: string;
    type?: string;
    editPendingTask?: any;
    publishTask?: any;
    pendingTask?: any;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    addTask?: any;
}

const ToDoForm : React.FunctionComponent<ToDoFormProps> = (props) => {
    const { editPendingTask, publishTask } = props;
    const valueOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      editPendingTask({
        [e.target.name]: e.target.value,
        id: 'new_task'

      });
    };

    const saveTask = () => {
      publishTask(
        props.pendingTask.title,                                                 
        props.pendingTask.effort,
        props.pendingTask.value,
      );
    };

    // const isDisabled = () => {
    //     if (                                                                                                                  
    //       props.pendingTask.title &&
    //       props.pendingTask.effort &&
    //       props.pendingTask.value
    //     ) {
    //       return false;
    //     }
    //       return true;
    //   };

  return (
    <div>
      <span className={styles.form}>
      <h1>Task List</h1>
      <Button
        className={styles.Button}
        type="submit"
        text="Create Task"
// tslint:disable-next-line: jsx-no-lambda
        onClick={() => props.addTask('New Task')}
      />
      <Input
        name="title"
        placeholder="Title"
// tslint:disable-next-line: jsx-no-lambda
        onChange={e => valueOnChange(e)}
        type="text"
      />         
      <Input
        name="effort"
        placeholder="Effort"
        type="text"
      />
      <Input
        name="value"
        placeholder="Value"
        type="text"
      />
      <Button
        className={styles.Button}
        type="submit"
        text="Save Task"
// tslint:disable-next-line: jsx-no-lambda
        onClick={() => saveTask()}
        // disabled={isDisabled()}
      />
      <Button
        className={styles.Button}
        type="submit"
        text="Delete Task"
      />
      </span>
    </div>  
  );
};


export default ToDoForm;