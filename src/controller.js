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
                    The first thing to do is think about splitting up the components. I would create three different components. 

Lets call the first component “PageController”, the second component “Dropdown” and the last component “Ingredients”

The PageController I would set up the hooks, useState, useEffect and createContext.  Lets call the fist useState hook “pizzaData”, and the second  “selectedType”

Outside of the PageController component I need to export createContext and let’s  call createContext PizzaContext.

In the PageController the CreateContext provider, I would share two states along with their setters; current selected pizza (string)  and the ingredients(array). 
Then inside of useEffect I would make a GET request and store the data into the pizzaData. At this point the useEffect would not have any dependencies but at the same time I only want it run once, so I would provide it with an empty array.
In the return section, house the Dropdown component and Ingredients component in a div. Both components would have access to both pizzaData and selectedType states.

In the Dropdown component I would have a useEffect and two different states. I would also import PizzaContext and store it within the useContext hook. Let’s call useContext hook Pizza_Context. Then Depending on the pizza api data layout, I would create two useStates. Let call the first useStates parsedData and the second selectedData. 
Inside of the useEffect body I would parse the data and store only the pizza type into parsedData using the setters. At the same time I would store the string “DEFAULT” in the selectedData. This useEffect would have a single dependency,  “Pizza_Context.pizzaData”.  
Then I would create a function called selectOnChange. Every time the drop down selection is changed this function would be called and the value would be stored within 
selectedData and “Pizza_Context.selected”. In the return part of the Dropdown component I would create the drop down using the select html tags; which would later be interpreted into JSX by react. 

In the Ingredients component I would import PizzaContext, useState, useEffect and useContext. After importing PizzaContext, I would  store it into useContext hook. Let’s call the useContext hook Pizza_Context. Then I would create two useStates called ingredients and checkbox.
In the useEffect body I would parse the ingredients only for the selected PizzaContext and they would be stored in ingredients as an array. I would also create an array of the same length as the ingredients. The array element would only have either true elements or false element depending on if the selected value is “Build your own”. This array would be stored in checkbox state. Then I would create a function called checkBoxOnChange. This function would control the checkbox.

In the return section of this component I would have a form with the checkbox mapped. The input checkbox would have a checked attribute with the default value referring to the array index.
                    </Pr>
                </HeaderContainer>

                <HeaderContainer>
                    <H2>How long would it take you (in hours)?</H2>
                </HeaderContainer>
                <HeaderContainer>
                    <Pr>This took me about 1 hour and 20 mins to build it.</Pr>
                </HeaderContainer>

                
                
            </Container>
        </Piz.Provider>
    )
}

export default PageController