// tslint:disable-next-line: interface-name
export interface RootState {
    Button: ButtonState;
    Input: InputState;
    Tasks: TaskState;
    ToDoForm: ToDoFormState;
    // MapState: MapState;

};

// tslint:disable-next-line: interface-name
export interface ButtonState {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    type?: string;
    text?: string;
    className?: string;
}

export interface InputState { 
    name : string;
    placeholder?: string; 
    onChange? : (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
}

// tslint:disable-next-line: interface-name
export interface TaskState {
    effort: number;
    id: string; 
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
    Placeholder: string;
    text: string;
    title: string;
    value: number;
    addTask: string;
}

// tslint:disable-next-line: interface-name
export interface ToDoFormState {
    title?: string;
    effort?: number;
    className?: string;
    Placeholder?: string;
    onChange?:  (e:React.ChangeEvent<HTMLInputElement>) => void; 
    text?: string;
    type?: string;
    editPendingTask?: any;
}

// // tslint:disable-next-line: interface-name
// export interface MapState {}

