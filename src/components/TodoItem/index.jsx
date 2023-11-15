import { useDispatch } from 'react-redux';
import './main.scss';


export default function TodoItem({ item }) {
  let colors = ["green", "red", "blue", "orange", "purple"];

  colors = colors.filter((c) => c !== item.color);
  colors.unshift(item.color);

  console.log(colors);
  const dispatch = useDispatch();



  return (
    <div className="todo__item">
  <label htmlFor="myCheckbox1" className="checkbox">
    <input onChange={() => dispatch({type:'todo/todoStatusChanged',payload:{id:item.id}})}  className="checkbox__input" type="checkbox" id="myCheckbox1"/>
    <svg className="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#FFF" stroke="#006F94" rx="3" />
      {item.completed ? <path className="tick" stroke="#1faea5" fill="none" strokeLinecap="round" strokeWidth="4" d="M4 10l5 5 9-9" /> : null }
      
    </svg>
    <span className="checkbox__label">{item.text}</span>
  </label>

    <div className='todo__color__container'>
    <select style={{color:item.color}} onChange={(e) => dispatch({type:'todo/todoColorChanged',payload:{id:item.id,color:e.target.value}})} name="" id="">
        {colors.map((color) => (

          <option  className='todo__option' style={{color:color}} key={crypto.randomUUID()} value={color}>
            {color}
          </option>
          
        ))}
      </select>
      <span onClick={() => dispatch({type:'todo/todoRemoved',payload:{id:item.id}})} className='remove__todo'>X</span>
    </div>
    </div>
  );
}
