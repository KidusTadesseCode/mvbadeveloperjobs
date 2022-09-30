import React, {useEffect, useState} from "react";
import { Container, CheckboxContainer, Checkbox, Label, Form } from "./ingredients_style";
import { Piz } from "./controller";

function Ingredients() {
    const pizza = React.useContext(Piz)
    const [ing, setInd] = useState([])
    const [boxChecker, setBoxChecker] = useState([])
 

    useEffect(()=>{
        if (pizza.type){
            let ingredientsTemp =[]
            for (let ind of pizza.pizzaTypeIng){
                for(let [k, v] of Object.entries(ind)){
                    if (ind['type']===pizza.type) ingredientsTemp=ind['ingredients']
                }
            }
            ingredientsTemp.sort()
            setInd(ingredientsTemp)
            const checkedDef =Array.from(Array(ingredientsTemp.length), x=> pizza.type==="Build My Own"? false : true)
            setBoxChecker(checkedDef)
            
        }
    },[pizza.type])




    const clickChange =(e)=>{
        const boxID = boxChecker.slice();
        const switchState = boxID[e.target.id]===true? false: true
        boxID[e.target.id]=switchState;
        setBoxChecker(boxID)
    }

    return(
            <Form>
                {ing.map((val, ind)=>{
                    return (
                        <CheckboxContainer key={val}>
                            <Checkbox type="checkbox" id={ind} value={val} checked={boxChecker[ind]} onChange={clickChange} />
                            <Label htmlFor={val}> {val} </Label>
                        </CheckboxContainer>
                        )
                })}
            </Form>
    )
}

export default Ingredients
