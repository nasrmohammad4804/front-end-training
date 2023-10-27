import './main.scss';

export default function Button({icon,content,style}){
    
    return <button className='button' style={style}>
        <img className='button__icon' src={icon} alt="this is icon of button" />
        <div className='button__content ' style={content.style}>{content.text}</div>
    </button>
}