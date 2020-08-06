import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
 return (
  <article className="teacher-item">
    <header>
      <img src="https://avatars0.githubusercontent.com/u/17408674?s=460&u=351a0f8f7ce9e420cdd8e3b97fde3d0c274f6b43&v=4" alt="Matheus Lorenzeto"/>
      <div>
        <strong>Matheus Mendes Lorenzeto</strong>
        <span>Química</span>
      </div>
    </header>

    <p>
      Entusiasta das melhores tecnologias de química avançada.
      <br/><br/>
      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
    </p>

    <footer>
      <p>
        Preço/hora 
        <strong>R$ 80,00</strong>
      </p>
      <button type="submit">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>            
  </article>
 ); 
}

export default TeacherItem;
