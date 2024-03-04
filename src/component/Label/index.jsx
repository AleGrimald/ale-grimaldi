import './Label.css';

const Label = (props)=>{
    const {contenido, vinculo, key} = props;
    return <label for={vinculo} key={key}>{contenido}</label>
}

export default Label;