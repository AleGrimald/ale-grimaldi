import Aref from '../Aref';
import './Li.css';
const Li = (props)=>{
    const {texto, key, click, link}= props;
    return <li key={key} onClick={click}>
        
        {
            link===null?{texto}:<Aref link={link} texto={texto}/>
        }
    </li>
}
export default Li;