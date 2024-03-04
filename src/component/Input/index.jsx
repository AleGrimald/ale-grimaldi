import './Input.css';

const Input = (props)=>{
    const {tipo, id, clase, valor, key} = props;
    return <input type={tipo} id={id} className={clase} value={valor} key={key} required/>
}

export default Input;