import React, {useEffect, useState} from "react";
import {Container, Select, Option} from "./dropDown_style";
import { Piz } from "./controller";



function Dropdown(){
    const pizza = React.useContext(Piz)
    const [data, setData]=useState()
    const [selectValue, setSelectedValue]=useState()

    useEffect(()=>{
        setData(pizza.pizzaTypeIng)
        setSelectedValue("DEFAULT")
    },[pizza.pizzaTypeIng])

    const selectedChanged=(e)=>{
        const type = e.target.value
        setSelectedValue(e.target.value)
        pizza.setType(type)
        
    }
    return (
        // <Container>
            <Select onChange={selectedChanged} value={selectValue}>
                {data && data.map((v, i)=>{
                    return (
                        i === 0? 
                            <Option key={0} value="DEFAULT" disabled >Choose Your Pizzas</Option> : 
                            <Option key={v.id} value={[v.type]} >{v.type}</Option>
                        )
                })}
            </Select>
        // </Container>
    )
}





export default Dropdown