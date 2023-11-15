import './main.scss';

export default function Header({backgroundColor,color,children}){
    return <h1 className="heading" style={{backgroundColor:backgroundColor,color:color}}>{children}</h1>
}