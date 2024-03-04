import Label from '../Label';
import Input from '../Input';
import Textarea from '../Textarea';
import './Form.css';

const Form = (props)=>{
    const {camposInp, campoTxtArea, botones} = props.datos
    const {idTxtArea, lblTextArea} = campoTxtArea;
    
    return <form  className='formulario'>
        <div className='container_inps'>
            {
                camposInp.map((inp, key)=><div className='container_inp'>
                    <Label contenido={inp.lblText} vinculo={inp.inpId} key={key}/>
                    <Input tipo={inp.inpType} id={inp.inpId} clase={inp.inpId} key={key}/>
                </div>)
            }
        </div>

        <div className='form_textarea'>
            <Label contenido={lblTextArea} vinculo={idTxtArea}/>
            <Textarea id={idTxtArea}/>
        </div>

        <div className='form_boton'>
            {
                botones.map((btn, key)=><Input tipo={btn.inpType} id={btn.inpId} valor={btn.inpValor}  key={key}/>)
            }
        </div>
    </form>
}

export default Form;