import './Imagen.css';
const Imagen = (props)=>{
    const {imagen, alter, clase}=props
    return <img className={clase} src={imagen} alt={alter}/>
}
export default Imagen;