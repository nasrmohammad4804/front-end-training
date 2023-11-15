import TodoItem from '../../components/TodoItem';
import './main.scss';
import {useDispatch,useSelector} from 'react-redux';

export default function Main(){

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);


    const todoHandler = (e) => {
       const {target} = e;

       if(e.code==='Enter'){
        let value = target.value;
        
        if(value){
            dispatch({type:'todo/todoAdded',payload:{id:crypto.randomUUID(),text:value,completed:false,color:''}});
        }
        e.target.value=null
       }
    }
    return <>
    <div className="heading__content heading__content--red" style={{color:'crimson'}}>Todos</div>

    <section className='todo__container'>
    <input onKeyDown={todoHandler} type="text" className='todo__container__input' placeholder='What needs to be done?' />
        {todos.map(todo => <TodoItem item={todo} key={todo.id}/>)}
        </section>
    </>
}