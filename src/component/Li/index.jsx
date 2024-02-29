import './Li.css';
const Li = (props)=>{
    const {texto, key, click}= props;
    return <li key={key} onClick={click}>
        {texto}
    </li>
}
export default Li;