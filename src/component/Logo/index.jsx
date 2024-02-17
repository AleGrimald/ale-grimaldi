import './Logo.css';
import Imagen from '../Imagen';
import Parrafo from '../Parrafo'
const Logo=(props)=>{
    const {img, alter, parrafo}=props.datosLogo;
    
    return <div className='logo'>
        <Imagen imagen={img} alter={alter}/>
        <Parrafo texto={parrafo}/>
    </div>
}
export default Logo;