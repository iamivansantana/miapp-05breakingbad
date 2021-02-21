import styled from '@emotion/styled'
import React from 'react'
import Proptypes from 'prop-types';



const Frase = ({frase}) => {
    return (
        <ContenedorFrase>
            <h1>{frase.quote}</h1> 
            <p>-{frase.author}</p> 
        </ContenedorFrase>
    )
}

export default Frase

//PropTypes
Frase.propTypes={
    frase: Proptypes.object.isRequired,
}


//Styled

const ContenedorFrase = styled.div`
    padding: 2rem;
    border-radius: 2rem;
    background-color: #FFF;
    max-width: 800px;
    margin-top: 10.5rem;

   

    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before{
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight: bold; 
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;