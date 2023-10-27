
import './main.scss';

export default function Logo({logo,content1,content2}){
    return (
        <div className="header__logo">
        <img src={logo} alt="" />
        <div className='header__logo__content'>
            <span>{content1}</span>
            <span>{content2}</span>
        </div>
        </div>
    );
}