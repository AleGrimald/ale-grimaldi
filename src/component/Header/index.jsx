import './Header.css';
import Ul from '../Ul';
import Logo from '../Logo';

const Header = (props)=>{
    const {datosHeader} = props;
    const {clase} = props.datosHeader;
    
    return <header className='header'>
        <Logo datosLogo={datosHeader}/>
        <Ul clase={clase} datosMenu={datosHeader}/>
    </header>
}
export default Header;