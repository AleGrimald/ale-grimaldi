import './Aref.css';

const Aref=(props)=>{
    const {link, clase, texto, key} = props;
    return <a href={link} className={clase} key={key}>
        {texto}
    </a>
}

export default Aref;