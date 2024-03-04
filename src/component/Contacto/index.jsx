import Form from '../Form';
import Imagen from '../Imagen';
import Parrafo from '../Parrafo';
import './Contacto.css';

const Contacto=(props)=>{
    const {datosContacto} = props;
    const {texto} = props.datosContacto;
    return <div className='contacto'>
        <div className='contacto_txtimg'>
            <div className='contacto_txt'>
                {
                    texto.map((txt, key)=><Parrafo texto={txt.txtTexto} clase={txt.txtClass} key={key}/>)
                }
            </div>
            
            <div className='contacto_img'>
                <Imagen imagen={'./contacto.png'}/>
            </div>
        </div>
        
        <Form datos={datosContacto}/>
    </div>
}
export default Contacto;