import React, {useEffect, useState} from "react";
import Dropdown from "./dropDown";
import Ingredients from "./ingredients";
import { Container, H2, H3, SubContainer, HeaderContainer, DropDownContainer, IngredientsContainer, Pr} from "./controller_style";
import axios from 'axios';


export const Piz= React.createContext()

function PageController() {
    const [pizzaTypeIng, setPizzaTypeIng]= useState()
    const [type, setType]=useState()

    useEffect(()=>{
        axios.get("https://raw.githubusercontent.com/KidusTadesseCode/KidusTadesseCode.pizzasDatai.io/main/data.json")
        // .then(e => setPizzaTypeIng(e.data))
        .then(e => {
            console.log(e.data)
            setPizzaTypeIng(e.data)
        })
    },[])

    const val ={
        pizzaTypeIng, setPizzaTypeIng,
        type, setType,
    }
    return(
        <Piz.Provider value={val}>
            <Container>

                <HeaderContainer>
                    <H2>Welcome to My Incredible One and Only State of The Art Pizza Shop</H2>
                </HeaderContainer>
                <HeaderContainer>
                    <H3>On the left You will find the house special and you be able to build your own pizza. On the righ you will find the ingredients.</H3>
                </HeaderContainer>
                
                <HeaderContainer>
                    <H3>Better Pizza Better Ingredients We Mccreary Veselka Bragg & Allen</H3>
                </HeaderContainer>

                <SubContainer>
                    <DropDownContainer>
                        <Dropdown/>
                    </DropDownContainer>
                    <IngredientsContainer>
                        <Ingredients/>
                    </IngredientsContainer>
                </SubContainer>

                <HeaderContainer>
                    <H2>The Approach</H2>
                </HeaderContainer>

                <HeaderContainer>
                    <H2>How would you implement this?</H2>
                </HeaderContainer>
                <HeaderContainer>
                    <Pr>
                        
                    </Pr>
                </HeaderContainer>

                <HeaderContainer>
                    <H2>How long would it take you (in hours)?</H2>
                </HeaderContainer>
                <HeaderContainer>
                    <Pr>This took me about 2 hours to build</Pr>
                </HeaderContainer>

                
                
            </Container>
        </Piz.Provider>
    )
}

export default PageController