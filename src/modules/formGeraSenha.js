import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerarSenha');

export default () => {
    gerarSenha.addEventListener('click', () =>{
        senhaGerada.innerHTML = gera();
    }); 
};

function gera(){
    
    if(qtdCaracteres.value == 0 || qtdCaracteres.value == null){
        alert('Campo de quantidade precisa está preenchido');
        return 'Nada Selecionado';
    } else{
        const senha = geraSenha(
            qtdCaracteres.value,
            chkMaiusculas.checked,
            chkMinusculas.checked,
            chkNumeros.checked,
            chkSimbolos.checked,
        );

         return senha;
    }
        
}