import './main.scss';

export default function Nav({items}) {


    return (
        <nav className="header__container">
            <ul className='header__container__list'>
            {items.map(item => <li key={crypto.randomUUID()} ><a href="" style={item.style}>{item.content}</a></li> )  }
            </ul>
        </nav>
    );
}