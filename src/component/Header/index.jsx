import './Header.css';
import Ul from '../Ul';
import Logo from '../Logo';

const Header = (props)=>{
    const {clase, arrLi, parrafo, img, alter, click} = props.datosHeader;
    
    return <header className='header'>
        <Logo img={img} alter={alter} parrafo={parrafo}/>
        <Ul clase={clase} datos={arrLi} click={click}/>
    </header>
}
export default Header;