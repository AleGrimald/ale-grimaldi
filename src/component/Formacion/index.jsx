import './Formacion.css';
import Imagen from '../Imagen';
import Parrafo from '../Parrafo';
import Aref from '../Aref';

const Formacion=(props)=>{
    const {datosFormacion} = props
    return <div className='formacion'>
        {
            datosFormacion.map(tarjeta => <div className={tarjeta.clase}>
                <Imagen imagen={tarjeta.img} alter={'Logo de Academia de Formacion'} clase='formacion_img'/>
                <Parrafo texto={tarjeta.titulo} clase='formacion_titulo'/>
                <Parrafo texto={tarjeta.texto} clase='formacion_texto'/>
                <div>
                    <Aref link={tarjeta.link} clase='formacion_link'/>
                    <Imagen imagen='./flechalink.png' alter='ir al link' clase='formacion_link_img'/>
                </div>
                
            </div>)
        }
    </div>
}
export default Formacion;