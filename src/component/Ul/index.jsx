import './Ul.css';
import Li from '../Li';
import Imagen from '../Imagen';

const Ul = (props) => {
    const {clase} = props;
    const {arrLi}=props.datosMenu;
    const {img, alter}=props.datosMenu.imagenes.flecha;
    const {clase_flecha}=props.datosMenu.clases;

    return <ul className={clase}>
        {
            <Imagen/>===null
            ?arrLi.map((elem,key)=><Li texto={elem} key={key}/>)
            :arrLi.map((elem,key)=><div>
                <Li texto={elem} key={key}/>
                <Imagen clase={clase_flecha} imagen={img} alter={alter}/>
            </div>)
        
        }
    </ul>
}
export default Ul;