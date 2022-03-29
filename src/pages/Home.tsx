/*Importando imagens*/
import illustrationsImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from "../assets/images/google-icon.svg";

/*Importando componentes React */
import { Button } from '../components/Buttons';

/*Importando Estilos*/
import '../styles/global.scss';
import '../styles/auth.scss';


export function Home(){
  return(
      <div id="page-auth">
        <aside>
            <img src={illustrationsImg} alt="" />
            <strong>Toda pergunta tem uma resposta</strong>
            <p>Aprenda e compartilhe conhecimentos com outras pessoas </p>
        </aside>
        <main>
          <div className='main-content'>
                  <img src={logoImg} alt="" />
                  <button className='create-room'>
                  <img src={googleIconImg} alt="Logo do google" />
                    Crie sua sala com o Google
                  </button>
                  <div className="separator">ou entre em uma sala</div>
            <form>
                    <input type="text" 
                    placeholder="Digite o código da sala"
                  />
                <Button type="submit">Entrar na sala</Button>
            </form>
          </div>
        </main>
      </div>
  );
}