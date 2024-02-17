import './Li.css';
const Li = (props)=>{
    const {texto, key}= props;
    return <li key={key}>
        {texto}
    </li>
}
export default Li;