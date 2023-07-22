// Parte de pesquisa é somente visual, precisamos criar a lógica para pesquisa
// onblur é chamado sempre que sairmos do código, esse evento de sair é chamado de clur
// Usaremos um estado para pesquisa dos livros que desejamos

// import Input from '../Input'
// import styled from 'styled-components'
// import { useState } from 'react'

// const PesquisaContainer = styled.section`
//         background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
//         color: #FFF;
//         text-align: center;
//         padding: 85px 0;
//         height: 270px;
//         width: 100%;
// `

// const Titulo = styled.h2`
//         color: #FFF;
//         font-size: 36px;
//         text-align: center;
//         width: 100%;
// `

// const Subtitulo = styled.h3`
//         font-size: 16px;
//         font-weight: 500;
//         margin-bottom: 40px;
// `

// export default function Pesquisa() {
//     const [textoDigitado, setTextoDigitado] = useState('');

//     return (
//         <PesquisaContainer>
//             <Titulo>Já sabe por onde começar?</Titulo>
//             <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
//             <Input
//                 placeholder="Escreva sua próxima leitura" 
//                 onBlur={evento => setTextoDigitado(evento.target.value)}/>
        
//         </PesquisaContainer>
//     )
// }

// Atribuimos o valor inicial do estado como vazio