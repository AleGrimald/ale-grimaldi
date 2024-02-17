import './Main.css';
import Parrafo from '../Parrafo';
import Ul from '../Ul';
import Imagen from '../Imagen';

const Main=(props)=>{
    const {datosMain}= props;
    const {titulo, p1, p2} = props.datosMain;
    const {img, alter} = props.datosMain.imagenes.foto;
    const {clase_titulo, clase_p1, clase_p2, clase_link, clase_foto} = props.datosMain.clases;

    return <main className='main'>
        <div className='main_texto'>
            <Parrafo clase={clase_titulo} texto={titulo}/>
            <Parrafo clase={clase_p1} texto={p1}/>
            <Parrafo clase={clase_p2} texto={p2}/>
            <Ul clase={clase_link} datosMenu={datosMain}/>
        </div>
        
        <div className='main_foto'>
            <Imagen clase={clase_foto} imagen={img} alter={alter}/>
        </div>

    </main>
}
export default Main;