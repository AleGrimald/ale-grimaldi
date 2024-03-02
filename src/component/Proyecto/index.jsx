import Aref from '../Aref';
import Imagen from '../Imagen';
import Parrafo from '../Parrafo';
import Ul from '../Ul';
import './Proyecto.css';

const Proyecto=(props)=>{
    const {datosProyecto} = props;
    return <div className='proyecto'>
        {
            datosProyecto.map((e, key)=><div className='proyecto_tarjeta' key={key}>
                <Imagen imagen={e.img} alter={e.alter} clase={e.clase}/>
                <div className='contenedor_p'>
                    {
                        e.texto.map((elem, key)=><Parrafo texto={elem} key={key}/>)
                    }
                </div>

                <Ul datos={e.arrLi} clase='proyecto_ul'/>

                <div className='contenedor_link'>
                    {
                        e.arrLink.map((elem, key)=><Aref link={elem.link} clase={elem.claseLink} texto={elem.txtLink} key={key}/>)
                    }
                </div>
                
            </div>)
        }
        
    </div>
}
export default Proyecto;