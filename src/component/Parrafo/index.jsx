import './Parrafo.css';
const Parrafo =(props)=>{
    const {texto, clase}=props;
    return <p className={clase}>
        {texto}
    </p>
}
export default Parrafo;