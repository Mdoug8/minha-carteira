import styled from 'styled-components';

export const Container = styled.div `

    grid-area: CT;
    color:${props => props.theme.colors.white};
    background-color:${props => props.theme.colors.primary};

    padding: 25px;

    height: calc(100vh - 70px);

    //todo conteudo que nao couber, não mostra e manda uma rolagem
    overflow-y: scroll;

    //propriedade que torna possível mexer no scrollbar
    ::-webkit-scrollbar{
        width: 10px;
    }

    //botao de rolagem do scrollbar
    ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

    //barra maior que fica por fora 
    ::-webkit-scrollbar-track{
        background-color: ${props => props.theme.colors.tertiary};
    }

`