
interface Todo {
    id:string;
    title : string;
    description : string ;
    complete : boolean;
    createdAt : Date
}

type TodoFormProps = {
    onSubmit : (todo:any) => void;
    onToggle:(state:boolean) =>void;    
}

type TodoItemProps = {
    todo: Todo; 
    onToggle:(id:string) => void;
    onDelete :(id:string) => void;
}

type TodoListProp = {
    todos : Todo[];
    onToggle:(id:string) => void;
    onDelete: (id:string) => void;
}


type HeaderProps = {
    firstname:string;
    onToggle :(state:boolean)=>void;
}

type FooterProps = {
    onToggle : (state:boolean)=>void;
}


export type{
    Todo,
    TodoFormProps,
    TodoItemProps,
    TodoListProp,
    HeaderProps,
    FooterProps
}
