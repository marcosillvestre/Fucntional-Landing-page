
import styled from 'styled-components'



export const Container = styled.div`

`

export const Detail = styled.div`
background-color: #707070;
text-align: center;
color:   ${({ theme }) => theme.third};
font-size: 20px;
padding: 50px 0 150px 0 ;
clip-path: ${props => props.down ? 'polygon(68% 54%, 100% 48%, 100% 100%, 0 100%, 0 62%, 30% 59%)' : 'polygon(20% 0%, 80% 0%, 100% 0, 100% 85%, 72% 78%, 35% 69%, 0 61%, 0 0)'};

p{
    position: relative;
    top: 100px;
    font-size: 12px;
}
div{
    display: flex;
    gap: 50px;
    justify-content: center;
        margin: 50px 0 30px 0; 

    button{
        border-radius: 4px;
        width: 160px;
        height: 40px;
        background: ${({ theme }) => theme.third};
        border: none;
        color: ${({ theme }) => theme.secundary};

        &:hover {
        background-color: ${({ theme }) => theme.secundary};
        color: ${({ theme }) => theme.third};
        border: none;
        box-shadow: 0px 1px 10px 0px rgba(255,255,255,0.73);
    }

    &:active {
        opacity: 0.6;
    }
    }
}
@media(max-width: 768px){
padding: 50px 15px 150px 10px ;
text-align:${props => props.down ? 'center' : 'start'} ;
p{
    
}
div{
    display: flex;
    flex-wrap: wrap;
    position: relative;
    bottom: 7px;
    gap: 20px;

     button{
    border: 1px solid ${({ theme }) => theme.secundary};

    }
    }
}
`

export const Form = styled.form`
padding: 0 10px;
display: flex;
gap: 60px;
color:${({ theme }) => theme.primary};

h1{
    color:${({ theme }) => theme.secundary};;
}
p{
    width: 500px;
    padding: 40px;
    height: 250px;
    margin-right: 100px;
    color:${({ theme }) => theme.primary};;
}

.radio{

display: flex;
gap: 5px;
label{
    margin: 20px 25px 20px 0;
}
}


label{
    display: flex;
    flex-direction: column;
    font-size: 10px;

    input{
        width: 200px;
        height: 20px;
        margin: 5px 0;
        padding-left: 20px;
    }
}
button{
    color: ${({ theme }) => theme.primary};
    width:200px;
    height: 20px;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 4px;
    background: ${({ theme }) => theme.third};
    &:hover {
        background-color: ${({ theme }) => theme.secundary};
        color: ${({ theme }) => theme.third};
        border: none;
    }

    &:active {
        opacity: 0.6;
    }
}
@media(max-width: 768px){
    padding: 10px;
    flex-wrap: wrap;
justify-content: center;

#inputs{
        width: 80vw;
        height: 20px;
        margin: 5px 0;
    }
    button{
        width: 80vw;
    }
p{
    margin: 0;
}
    .textInstitucional{
            width: 95vw;
        }

}
`
export const ContainerItens = styled.div`
margin-top: 80px;
text-align: center;
display: flex;
flex-direction: column;
gap: 40px;
align-items: center;



button{
    width: 260px;
    height: 30px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.third};
    border: 1px solid ${({ theme }) => theme.primary};

    &:hover {
        background-color: ${({ theme }) => theme.secundary};
        color: ${({ theme }) => theme.third};
    }

    &:active {
        opacity: 0.6;
    }

}

.line{
    font-size: 16px;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.secundary};
}

.line::before{
    content: "";
    width: 300px;
    height: 2px;
    border-radius: 5px;
    background: ${({ theme }) => theme.secundary};
    position: absolute;
    left: 550px;
    transform: translateY(10px);
    

}
.line::after{
     content: "";
    width: 300px;
    height: 2px;
    border-radius: 5px;
    background: ${({ theme }) => theme.secundary};
    position: absolute;
    right: 550px;
    transform: translateY(10px);

}
@media(max-width: 768px){

    .line{}
        .line::before{
    content: "";
    width: 8em;
    height: 2px;
    border-radius: 5px;
    background: ${({ theme }) => theme.secundary};
    position: absolute;
    left: 10px;
    transform: translateY(10px);

}
.line::after{
    content: "";
    width: 8em;
    height: 2px;
    border-radius: 5px;
    background: ${({ theme }) => theme.secundary};
    position: absolute;
    right: 10px;
    transform: translateY(10px);
}

}
`
export const Produtos = styled.div`
padding: 0 300px;
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 35px;

button{
    width: 80%;
    height: 30px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.third};
    border: 1px solid ${({ theme }) => theme.primary};


    &:hover {
        background-color: ${({ theme }) => theme.secundary};
        color: ${({ theme }) => theme.third};
    }

    &:active {
        opacity: 0.6;
    }
}
.items{
    text-align: start;
    padding: 15px 18px;
}

@media(max-width: 768px){
grid-template-columns: repeat(1, 1fr);
padding: 10px;
.items{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.product{
    display: flex;
    gap: 20px;
}
}

`
export const Footer = styled.div`
text-align: center;
.secLine{
        }
        .secLine::before{
            content: "";
    width: 18em;
    height: 2px;
    border-radius: 5px;
    background: #888888;
    position: absolute;
    left: 570px;
    transform: translateY(10px);


                    } 
        .secLine::after{
            content: "";
    width: 18em;
    height: 2px;
    border-radius: 5px;
    background: #888888;
    position: absolute;
    right: 570px;
    transform: translateY(10px);
    
        } 

    form{
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        display: flex;
        justify-content: center;
        gap: 50px;
        margin: 30px;
    }
    }

                                                

p{
    margin: 26px;
    font-size: 16px;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.secundary};
}
label{
    color: ${({ theme }) => theme.secundary};
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    input{
        width: 340px;
        height: 30px;
        border: 1px solid ${({ theme }) => theme.secundary};
        padding-left: 10px;

    }

}

button{
    color: ${({ theme }) => theme.secundary};
    height: 30px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.third};
    border: 1px solid ${({ theme }) => theme.secundary};
    width: 260px;


     &:hover {
        background-color: ${({ theme }) => theme.secundary};
        color: ${({ theme }) => theme.third};
    }

    &:active {
        opacity: 0.6;
    }
}

@media(max-width: 768px){

    form{
        gap: 15px;
        margin: 0px;
        padding: 10px;
        div{
        flex-direction:column;
        gap: 15px;
        input{
            width: 80vw;
        }

        }
        
       
    }
.secLine{
        }
        .secLine::before{
            content: "";
    width: 7em;
    height: 2px;
    border-radius: 5px;
    background: #888888;
    position: absolute;
    left: 12px;
    transform: translateY(10px);

                    } 
        .secLine::after{
            content: "";
    width: 7em;
    height: 2px;
    border-radius: 5px;
    background: #888888;
    position: absolute;
    right: 12px;
    transform: translateY(10px);

        } 

}

`



