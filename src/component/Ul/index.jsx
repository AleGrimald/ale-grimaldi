import './Ul.css';
import Li from '../Li';
import Imagen from '../Imagen';

const Ul = (props) => {
    const {clase, datos, imagen, claseFlecha, estilos, click, link} = props;
    
    return <ul className={clase}>
        {
            imagen!=null
            ?datos.map((elem,key=0)=><div className={claseFlecha} style={{background:estilos[key].fondo, color:estilos[key].color, boxShadow:estilos[key].brillo}}>
                <Li link={link[key]} texto={elem} key={key}/>
                <Imagen imagen={imagen}/>
            </div>)
            :click!=null
            ?datos.map((elem,key)=><Li texto={elem} key={key} click={click[key]}/>)
            :datos.map((elem, key)=><Li texto={elem} key={key}/>)
        }
    </ul>
}
export default Ul;