import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Sobremi from './component/Sobremi';
import Skill from './component/Skill';
import Formacion from './component/Formacion';
import Proyecto from './component/Proyecto';
import Contacto from './component/Contacto';
import Footer from './component/Footer';
import { useState } from 'react';

function App() {
  //Estado de cada Seccion de la pagina
  const [btnSobre, setBtnSobre] = useState(false);
  const [btnSkill, setBtnSkill] = useState(false);
  const [btnFormacion, setBtnFormacion] = useState(false);
  const [btnProyecto, setBtnProyecto] = useState(false);
  const [btnContacto, setBtnContacto] = useState(false);
  const [btnInicio, setBtnInicio] = useState(true);

  //Eventos Click para los botones del header
  const controlSobremi = ()=>{
    setBtnSobre(!btnSobre);
    setBtnSkill(false);
    setBtnFormacion(false);
    setBtnProyecto(false);
    setBtnContacto(false);
    btnSobre?setBtnInicio(!btnInicio):setBtnInicio(false);
  }
  const controlSkill = ()=>{
    setBtnSobre(false);
    setBtnSkill(!btnSkill);
    setBtnFormacion(false);
    setBtnProyecto(false);
    setBtnContacto(false);
    btnSkill?setBtnInicio(!btnInicio):setBtnInicio(false);
  }
  const controlFormacion = ()=>{
    setBtnSobre(false);
    setBtnSkill(false);
    setBtnFormacion(!btnFormacion);
    setBtnProyecto(false);
    setBtnContacto(false);
    btnFormacion?setBtnInicio(!btnInicio):setBtnInicio(false);
  }
  const controlProyecto = ()=>{
    setBtnSobre(false);
    setBtnSkill(false);
    setBtnFormacion(false);
    setBtnProyecto(!btnProyecto);
    setBtnContacto(false);
    btnProyecto?setBtnInicio(!btnInicio):setBtnInicio(false);
  }
  const controlContacto = ()=>{
    setBtnSobre(false);
    setBtnSkill(false);
    setBtnFormacion(false);
    setBtnProyecto(false);
    setBtnContacto(!btnContacto);
    btnContacto?setBtnInicio(!btnInicio):setBtnInicio(false);
  }
  const controlInicio = ()=>{
    setBtnSobre(false);
    setBtnSkill(false);
    setBtnFormacion(false);
    setBtnProyecto(false);
    setBtnContacto(false);
    setBtnInicio(true);
  }


  //Texto, Link, Estilos, Imagenes de los componenetes de cada seccion de la pagina
  const datosHeader ={ 
    img:'estrellas.png',
    alter:"estrellas decorativas",
    parrafo:'Grimaldi Oscar Alejandro',
    clase:'link_menu',
    arrLi:['Inicio','Sobre mi','Skills','Formacion','Proyectos','Contacto'],
    click:[controlInicio, controlSobremi, controlSkill, controlFormacion, controlProyecto, controlContacto]
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
      clase_flecha:'main_flecha',
    },
    arrLi:['Github','Linkedin','Curriculum'],
    aref:['https://github.com/AleGrimald','https://www.linkedin.com/in/alejandro-grimaldi-828868262/','#'],
    imagenes:{
      foto:{
        icono:'Mifoto.jpeg',
        alter:"foto de perfil",
      },
      flecha:{
        icono:'flecha.svg',
        alter:'decoracion para los links'
      }
    },
    estilosFlecha:[
      {
        fondo:'linear-gradient(60deg,rgba(5, 5, 5, 0.7) 50%, rgb(255, 255, 255))',
        color:'#ffffff',
        brillo:'0px 0px 5px 1px white'
      },
      {
        fondo:'linear-gradient(60deg,#0e76a8 45%, rgb(235, 235, 255))',
        color:'#ffffff',
        brillo:'0px 0px 5px 1px rgb(123, 255, 248)'
      },
      {
        fondo:'linear-gradient(60deg,rgb(106, 14, 168, 0.4) 55%, rgb(255, 255, 255))',
        color:'#ffffff',
        brillo:'0px 0px 5px 1px rgb(188, 163, 255)'
      }
    ]
  }
  const datosSobremi ={
    titulo:'Sobre mi',
    texto:'Hola, soy Ale, tengo 31 años y actualmente me encuentro capacitándome en programación. Actualmente trabajo enseño de forma particular Matemáticas. Me adapto bien al entorno y aprendo lo que haga falta. Me gusta hacer las cosas bien, soy minucioso, trato de que las cosas salgan perfectamente. Tengo buen trato con las personas, he atendido al público tanto en locales comerciales como de encargado en un edificio. Espero tener la oportunidad de formar parte del equipo de trabajo, desde ya muchas gracias por su tiempo.',
    clase:'sobre_texto',
    foto:'firma.png',
    alter:'firma del desarrolladors',
    claseFirma:'firma'
  }
  const datosSkill=[
    {
      titulo: 'HTML5',
      img:'./html.png',
      clase:['skill_img', 'skill_titulo']
    },
    {
      titulo: 'CSS3',
      img:'./css.png',
      clase:['skill_img', 'skill_titulo']
    },
    {
      titulo: 'Javascript',
      img:'./js.png',
      clase:['skill_img', 'skill_titulo']
    },
    {
      titulo: 'React',
      img:'./react.png',
      clase:['skill_img', 'skill_titulo']
    },
    {
      titulo: 'Node JS',
      img:'./nodejs.png',
      clase:['skill_img', 'skill_titulo']
    },
    {
      titulo: 'Express JS',
      img:'./express.png',
      clase:['skill_img', 'skill_titulo']
    },
    {
      titulo: 'Java',
      img:'./java.png',
      clase:['skill_img', 'skill_titulo']
    },
    {
      titulo: 'C++',
      img:'./c.png',
      clase:['skill_img', 'skill_titulo']
    },
    {
      titulo: 'C#',
      img:'./csharp.png',
      clase:['skill_img', 'skill_titulo']
    },
  ]
  const datosFormacion= [
    { 
      img:'./aluralogo.png',
      titulo:'Programa Oracle Next Education - Front-end',
      texto:'2023 - ONE & Alura',
      link:'https://app.aluracursos.com/program/certificate/3f94b331-85cf-44c7-adb9-0f7e9ecb0396',
      clase:'formacion_tarjeta',
      nombre:'Certificado'
    },
    { 
      img:'./freecodecamplogo.svg',
      titulo:'Front End Development Libraries',
      texto:' 2024 - FreeCodeCamp',
      link:'https://freecodecamp.org/espanol/certification/AleGrimaldi/front-end-development-libraries',
      clase:'formacion_tarjeta',
      nombre:'Certificado'
    },
    { 
      img:'./aluralogo.png',
      titulo:'Formación SQL con MySQL',
      texto:'2023 - ONE & Alura',
      link:'https://app.aluracursos.com/degree/certificate/be62438e-71ec-492b-a880-67d24db656db',
      clase:'formacion_tarjeta',
      nombre:'Certificado'
    },
    { 
      img:'./freecodecamplogo.svg',
      titulo:'Backend Web - Node.js y Express',
      texto:'2024 - FreeCodeCamp',
      link:'s/Certificacion',
      clase:'formacion_tarjeta',
      nombre:'Certificado'
    },
    { 
      img:'./iestafiviejo.png',
      titulo:'Tecnicatura en Desarrollo de Software - JAVA',
      texto:'2023 - IES Tafi Viejo ext Yerba Buena',
      link:'s/Certificacion',
      clase:'formacion_tarjeta',
      nombre:'Certificado'
    },
    { 
      img:'./iestafiviejo.png',
      titulo:'Tecnicatura en Desarrollo de Software - C++',
      texto:'2023 - IES Tafi Viejo ext Yerba Buena',
      link:'s/Certificacion',
      clase:'formacion_tarjeta',
      nombre:'Certificado'
    },
  ]
  const datosProyecto= [
    {
      img:'./barberia.png',
      texto:['Barberia Alura','Desarrollado en el curso Alura Latam','Tecnologias Implementadas:'],
      alter:'Imagen de la pagina',
      arrLi:['HTML5','CSS3','Diseño Responsivo'],
      flecha:'./flecha.svg',
      arrLink:[
        {
          txtLink:'Ver Demo',
          link:'https://alegrimald.github.io/La-Barberia/',
          claseLink:'proyecto_link'
        },
        {
          txtLink:'Ver Repositorio',
          link:'https://github.com/AleGrimald/La-Barberia',
          claseLink:'proyecto_link'
        },
      ],
      clase:'proyecto_img'
    },
    {
      img:'./encriptador.png',
      texto:['Encriptador de Texto','Desarrollado en el curso Alura Latam','Tecnologias Implementadas'],
      alter:'Imagen de la pagina',
      arrLi:['HTML5','CSS3','Diseño Responsivo','JS'],
      flecha:'./flecha.svg',
      arrLink:[
        {
          txtLink:'Ver Demo',
          link:'https://alegrimald.github.io/Encriptador-Ale/'
        },
        {
          txtLink:'Ver Repositorio',
          link:'https://github.com/AleGrimald/Encriptador-Ale'
        },
      ],
      clase:'proyecto_img'
    },
    {
      img:'./recetas.png',
      texto:['Recetas de Cocina','Desarrollado en el curso Alura Latam','Tecnologias Implementadas'],
      alter:'Imagen de la pagina',
      arrLi:['HTML5','CSS3','Diseño Responsivo'],
      flecha:'./flecha.svg',
      arrLink:[
        {
          txtLink:'Ver Demo',
          link:'https://alegrimald.github.io/Recetas-Cocina-Ale/'
        },
        {
          txtLink:'Ver Repositorio',
          link:'https://github.com/AleGrimald/Recetas-Cocina-Ale'
        },
      ],
      clase:'proyecto_img'
    },
    {
      img:'./alurageek.png',
      texto:['AluraGeek','Desarrollado en el curso Alura Latam','Tecnologias Implementadas'],
      alter:'Imagen de la pagina',
      arrLi:['HTML5','CSS3','Diseño Responsivo'],
      flecha:'./flecha.svg',
      arrLink:[
        {
          txtLink:'Ver Demo',
          link:'https://alegrimald.github.io/AleGeek/'
        },
        {
          txtLink:'Ver Repositorio',
          link:'https://github.com/AleGrimald/AleGeek'
        },
      ],
      clase:'proyecto_img'
    },
  ]
  

  return (
    <div className="App">
      <Header datosHeader={datosHeader}/>

      {
        btnInicio?<Main datosMain={datosMain}/>:<></>
      }
      
      {
        btnSobre?<Sobremi datosSobremi={datosSobremi}/>:<></>
      }

      {
        btnSkill?<Skill datosSkill={datosSkill}/>:<></>
      }

      {
        btnFormacion?<Formacion datosFormacion={datosFormacion}/>:<></>
      }

      {
        btnProyecto?<Proyecto datosProyecto={datosProyecto}/>:<></>
      }

      {
        btnContacto?<Contacto/>:<></>
      }
      
      <Footer />
    </div>
  );
}

export default App;
