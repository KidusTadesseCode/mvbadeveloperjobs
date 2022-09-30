How would you implement this?


The first thing is think about splitting up the components. I would create three different components. 

Lets the call the first component “PageController”, the second component “Dropdown” and the last component “Ingredients”

The PageController I would set up the set up the hooks, useState, useEffect and createContext.  Let call the fist useState hook “pizzaData”, and the second  “selectedType”

Outside of the PageController component export createContext. Let’s call createContext PizzaContext.

In the PageController the CreateContext provider I would share two states along with there setters; current selected pizza (string)  and the ingredients(array). 
Then inside of useEffect I would make a GET request and store the data into the pizzaData. This useEffect would not have any dependencies at the same time I only want it run ones, so I would provide it with an empty array.
In the return section house the Dropdown component and Ingredients component in a div. Both components would have access to the both pizzaData and selectedType states.

In the Dropdown component I would have a useEffect and two different states. I would also import PizzaContext and store it into useContext hook. Let’s call useContext hook Pizza_Context. Then Depending on the pizza api data layout, I would create two useStates. Let call the first useStates parsedData and the second selectedData. 
Inside of the useEffect body I would parse the data and store only the pizza type into parsedData using the setters. At the same time I would a store the string “DEFAULT” in the selectedData. This useEffect would have single dependencies,  “Pizza_Context.pizzaData”.  
This I would create function called selectOnChange. Every time the drop down selection is changed this function would be called and store the value into 
selectedData and “Pizza_Context.selected”. In the return part of Dropdown component I would create the drop down using the select html tags, which would be later interpreted into JSX by react. 

In the Ingredients component I would import PizzaContext and useState, useEffect useContext. After importing PizzaContext, I would  store it into useContext hook. Let’s call useContext hook Pizza_Context. Then I would create two useStates called ingredients and checkbox.
In the useEffect body I would parse the ingredients only for the selected PizzaContext and would be stored in ingredients as an array. I would also create an array of the same length as the ingredients. The array element would only have either true elements or false element depending if the selected value is “Build you own”. This array would be stored in checkbox state. Then I would create a function called checkBoxOnChange. This function would control the checkbox.

In the return section of this component I would have a from with the checkbox mapped. The input checkbox would have a checked attribute with the default value referring to the array index.
