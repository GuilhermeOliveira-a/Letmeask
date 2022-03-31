import { Link } from 'react-router-dom';

/*Importando imagens*/
import illustrationsImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from "../components/Buttons";

/*Importando Estilos*/
import '../styles/global.scss';
import '../styles/auth.scss';

export function NewRom(){
    return(
        <div id="page-auth">
        <aside>
            <img src={illustrationsImg} alt="" />
            <strong>Toda pergunta tem uma resposta</strong>
            <p>Aprenda e compartilhe conhecimentos com outras pessoas </p>
        </aside>
        <main>
          <div className='main-content'>
                  <img src={logoImg} alt="Logo do letmeask" />
                  <h2>Criar uma nova sala</h2>
            <form>
              <input className="limite" type="text" placeholder="Nome da sala"/>
              <Button type="submit">Criar sala</Button>
            </form>
            <p>
                Quer entrar em uma sala existente ? <Link to="/">Clique aqui</Link>
            </p>
          </div>
        </main>
      </div>
    );
}