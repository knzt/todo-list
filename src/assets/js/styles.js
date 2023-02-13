import styled from "styled-components";

// export const Title = styled.h1`
// font-family: 'Patrick Hand', cursive;
// color: #F7EEFB;
// text-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
// font-size: 38px

// @media (max-width: 600px) {
//     font-size: 25px;
//     color: CECFDC;
// }
// `

export const Container = styled.div`
background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ToDoList = styled.div`
background-color: #F7EEFB;
padding: 30px;
border-radius: 5px;
width: 48vw;
max-height: 70vh;
overflow: auto;
box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);



    ul {
        padding: 0;
        margin-top: 40px;
}
`

export const Input = styled.input`
border: 2px solid #CBC9EC;
border-radius: 5px;
height: 40px;
width: 60%;
color: rgb(87, 71, 85);
font-size: 17px;
margin-right: 15px;

@media (max-width: 1500px) {
    width: 55%;
}

@media (max-width: 768px) {
    width: 50%;
}
`

export const Button = styled.button`
background: #A286C1;
border-radius: 5px;
height: 40px;
color: white;
border: none;
width: 37.3%;
font-size: 17px;

@media (max-width: 1780px) {
    width: 36.7%;
}

@media (max-width: 768px) {
    width: 35%;
}

@media (max-width: 480px) {
    width: 20%;
}
`

export const ListItem = styled.div` {
color: #9f80c4;
background: ${ props => props.isFinished ? '#B0DAE6' : '#EBDAF4'};
box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
border-radius: 5px;
height: 60px;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 25px;
width: 100%;


    li {
        color: rgb(87, 71, 85);
        list-style: none;
        display: 'inline-block',
    }
    
    
}`

export const BackgroundAdvise = styled.h3`
display: flex;
justify-content: center;
align-items: center;
color: #cbc9ec8b;
text-transform: uppercase;
`