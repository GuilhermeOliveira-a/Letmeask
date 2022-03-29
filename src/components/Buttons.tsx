import '../styles/button.scss';

import { ButtonHTMLAttributes } from 'react' //Importando todos os atributos de um botão HTML padrão para usar no Type ButtonProps
type ButtonProps= ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps){
  return(
      <button className='button'{...props}/>
  );
}
