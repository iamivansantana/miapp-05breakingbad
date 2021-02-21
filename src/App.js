import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import Frase from './components/Frase';



function App() {
  //state de Frases
  const [frase,guardarFrase]=useState({});
  
  const consultarApi= async ()=>{
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
        const frase = await api.json();
        guardarFrase(frase[0]);
  }

  //Cargar una Frase
  useEffect(()=>{
    consultarApi();
  },[])

  return (
    <Contenedor>
      <Frase 
        frase={frase}
      />
      <Boto
        onClick={consultarApi}
      >
        obtener Frase
      </Boto>
    </Contenedor>
  );
}

export default App;


//styled

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10rem;
  flex-direction: column;
`;

const Boto = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%,#007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif  ;
  color: #FFF;
  margin-top: .5rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover{
    cursor:pointer;
    background-size: 400px;
  }

`;