import './main.css';
import cookingImage from './../../images/image.png';

export default function Header(){
    
    const headingList = [
        'Home','About','Recipes','Contact','Blog'
    ]

    return <div className='heading'>
        <img className='heading__image' src={cookingImage} alt="cooking picture"   />
        <ul className='heading__list'>
            {headingList.map(item => <li className='heading__list__item'><a href="">{item}</a></li>)}
        </ul>

        <div className='heading__link'>
        <a className='' href="#">Login / Sign up</a>
        </div>
    </div>
}