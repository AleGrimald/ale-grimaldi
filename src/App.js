import './App.css';
import Header from './component/Header';
import Main from './component/Main';

function App() {
  const datosHeader ={ 
    img:'estrellas.png',
    alter:"estrellas decorativas",
    parrafo:'Grimaldi Oscar Alejandro',
    clase:'link_menu',
    arrLi:['Sobre mi','Skills','Hobbies','Formacion','Proyectos','Contacto']
  }

  const datosMain ={
    titulo:'Hola, mi nombre es Alejandro y me dedico al desarrollo Forntend de paginas Web',
    p1:'Soy formado en Desarrollo Web Fornt end (HTML5, CSS3 y JS) y actualmente estoy participando del proyecto Oracle ONE en Alura Latam.',
    p2:'Ademas comence a cursar la Tecnicatura de Desarrolo de Software en el IES Tafi Viejo - Tucuman',
    clases:{
      clase_titulo:'main_titulo',
      clase_p1:'main_p1',
      clase_p2:'main_p2',
      clase_link:'main_redes',
      clase_foto:'main_img',
      clase_flecha:'main_flecha'
    },
    arrLi:['Github','Linkedin','Instagram','Curriculum'],
    imagenes:{
      foto:{
        img:'Mifoto.jpeg',
        alter:"foto de perfil",
      },
      flecha:{
        img:'flecha.svg',
        alter:'decoracion para los links'
      }
    }
  }

  return (
    <div className="App">
      <Header datosHeader={datosHeader}/>
      <Main datosMain={datosMain}/>
    </div>
  );
}

export default App;
