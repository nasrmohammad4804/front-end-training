import './main.scss';
import Logo from '../../components/Logo';
import logo from './../../assets/images/logo.png';
import Nav from '../../components/Nav';
import Button from '../../components/Button';
import ButtonIcon from './../../assets/images/ant-design_cloud-upload-outlined.png';

export default function Header({}){

    const navItems = [
        {content:"Home",style:{color:"#05F591"}},
        {content:"PC Wallpapers"},
        {content:"Phone Wallpapers"},
        {content:"4K Wallpapers"},
    ]

    return (
        <header className="header">
            <Logo logo={logo} content1={'Wallpaper'} content2={'Mania'}/>
            <Nav items={navItems} />
            <Button icon={ButtonIcon} content={{text:'Upload',style:{fontSize:'1.5rem'}}} style={{backgroundColor:'#06F591'}} />
        </header>
    )
}