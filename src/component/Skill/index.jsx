import Imagen from '../Imagen';
import Parrafo from '../Parrafo';
import './Skill.css';

const Skill=(props)=>{
    const {datosSkill} = props;
    return <div className='skill'>
        {
            datosSkill.map(element =><div className='skill_container'>
                <div className='container_img'>
                    <Parrafo clase={element.clase[1]} texto={element.titulo}/>
                    <Imagen clase={element.clase[0]} imagen={element.img}/>
                </div>
            </div>)
        }
    </div>
}
export default Skill;