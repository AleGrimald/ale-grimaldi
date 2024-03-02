import './Main.css';
import Parrafo from '../Parrafo';
import Ul from '../Ul';
import Imagen from '../Imagen';

const Main=(props)=>{
    const {titulo, p1, p2, clases, arrLi, imagenes, estilosFlecha, aref} = props.datosMain;
    const {clase_titulo, clase_p1, clase_p2, clase_link, clase_foto, clase_flecha} = clases;
    const {foto, flecha} = imagenes;


    return <main className='main'>
        <div className='main_texto'>
            <Parrafo clase={clase_titulo} texto={titulo}/>
            <Parrafo clase={clase_p1} texto={p1}/>
            <Parrafo clase={clase_p2} texto={p2}/>
            <Ul clase={clase_link} claseFlecha={clase_flecha} datos={arrLi} imagen={flecha.icono} estilos={estilosFlecha} link={aref}/>
        </div>
        
        <div className='main_foto'>
            <Imagen clase={clase_foto} imagen={foto.icono} alter={foto.alter}/>
        </div>

    </main>
}
export default Main;