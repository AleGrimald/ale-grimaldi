import './Aref.css';

const Aref=(props)=>{
    const {link, clase} = props;
    return <a href={link} className={clase}>
        Certificacion
    </a>
}

export default Aref;