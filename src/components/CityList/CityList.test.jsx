import React from "react"
import { fireEvent, render } from "@testing-library/react"
import CityList from "./Citylist"


const cities = [
    { city: "Buenos Aires", country: "Argentina"},
    { city: "Bogota", country: "Colombia"},
    { city: "Madrid", country: "España"},
    { city: "Ciudad de Mexico", country: "Mexico"},
]



test("CityList renders", async () => {
    const {findAllByRole} = render (<CityList cities={cities} />)
    const items= await findAllByRole("button")
    expect(items).toHaveLength(4)
    
})

test ("CityList click on item", async () =>{
    // debemos simular una accion del usuario: click sobre item 
    // para eso vamos a utilizar una funcion " mock"

    const fnClickOnItem= jest.fn()

    const { findAllByRole }= render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("button")

    // ahora para simular la accion, vamos a utilizar fireEvent
    // fireEvent es parte de la libreria testing-library/react

    fireEvent.click(items[0])

    // ahora que deberia suceder?
    // se debio llamar a la funcion fnClickOnItem UNA univa vez

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})
