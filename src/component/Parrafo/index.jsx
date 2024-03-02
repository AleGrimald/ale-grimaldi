import './Parrafo.css';
const Parrafo =(props)=>{
    const {texto, clase, key}=props;
    return <p className={clase} key={key}>
        {texto}
    </p>
}
export default Parrafo;