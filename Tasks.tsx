import *as React from 'react';
import Button from '../Button/Button';
import ToDoForm from '../ToDoForm/Container';

// tslint:disable-next-line: interface-name
interface TaskProps {
    effort: number;
    placeholder: string;
    text: string;
    title: string;
    value: number;
    addTask: any;
    id: number; 
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}

const Tasks : React.FunctionComponent<TaskProps> = (props) => {
return (
    <div>
         {props.id ? (
      <ToDoForm />
    ) : (
      <Button
        type="button"
// tslint:disable-next-line: jsx-no-lambda
        onClick={() => props.addTask('New Task')}
        text="Create Task"
      />
    )}
    </div>

);
};


export default Tasks;