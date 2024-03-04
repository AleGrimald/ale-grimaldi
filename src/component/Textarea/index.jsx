import './Textarea.css';

const Textarea = (props)=>{
    const {id} = props;
    return <textarea id={id} required/>

}

export default Textarea;