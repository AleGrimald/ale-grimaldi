import Imagen from '../Imagen';
import Parrafo from '../Parrafo';
import './Sobremi.css';

const Sobremi = (props)=>{
    const {titulo, texto, clase, foto, alter, claseFirma}= props.datosSobremi;
    return <div className={clase}>
        <div className='contenedor_texto'>
            <Parrafo texto={titulo}/>
            <Parrafo texto={texto}/>
        </div>
        <div className='contenedor_img'>
            <Imagen imagen={foto} alter={alter} clase={claseFirma}/>
        </div>
    </div>
}
export default Sobremi;