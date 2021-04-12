import React from "react"
import { findByRole, fireEvent, render } from "@testing-library/react"
import CityList from "./Citylist"
import { ListItemAvatar } from "@material-ui/core"

const cities = [
    { city: "Buenos Aires", country: "Argentina"},
    { city: "Bogota", country: "Colombia"},
    { city: "Madrid", country: "España"},
    { city: "Ciudad de Mexico", country: "Mexico"},
]



test("CityList renders", async () => {
    const {findAllByRole} = render (<CityList cities={cities} />)
    const items= await findAllByRole("listitem")
    expect(items).toHaveLength(4)
    
})

test ("CityList click on item", async () =>{
    // debemos simular una accion del usuario: click sobre item 
    // para eso vamos a utilizar una funcion " mock"

    const fnClickOnItem= jest.fn()

    const { findAllByRole }= render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("listitem")

    // ahora para simular la accion, vamos a utilizar fireEvent
    // fireEvent es parte de la libreria testing-library/react

    fireEvent.click(items[0])

    // ahora que deberia suceder?
    // se debio llamar a la funcion fnClickOnItem UNA univa vez

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})
