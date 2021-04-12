import React from 'react'
import PropTypes from 'prop-types'
import Grid from "@material-ui/core/Grid"
import CityInfo from "./../CityInfo"
import Weather from "./../Weather"


// renderCityAndCountry se va a covertir en una funcion que retorna otra funcion 
const renderCityAndCountry= evenOnClickCity => cityAndCountry => {
    const {city, country} = cityAndCountry
        
    return (
        <li key={city} onClick={evenOnClickCity} >
            <Grid container
            justify="center"
            alignItems="center"
        >

            <Grid item 
                md={8}
                xs={12}>
                <CityInfo city={city} country={country} />
            </Grid>
            <Grid item 
                md={4}
                xs={12}>
                <Weather temperature={10} state= "sunny" />

            </Grid>
        </Grid>
        </li>
    )
}

const Citylist = ({cities, onClickCity}) => {
    return (
        <ul>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
            }
        </ul>
    )
}   

// como podemos valorar esta validacion?

Citylist.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func,
}

export default Citylist
