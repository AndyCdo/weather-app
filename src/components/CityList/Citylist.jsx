import React from 'react'
import PropTypes from 'prop-types'
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import CityInfo from "./../CityInfo"
import Weather from "./../Weather"


// renderCityAndCountry se va a covertir en una funcion que retorna otra funcion 
const renderCityAndCountry= evenOnClickCity => cityAndCountry => {
    const {city, country} = cityAndCountry
        
    return (
        <ListItem 
            button
            key={city}
            onClick={evenOnClickCity} >
            <Grid container
            justify="center"
            alignItems="center"
        >

            <Grid item 
                md={9}
                xs={12}>
                <CityInfo city={city} country={country} />
            </Grid>
            <Grid item 
                md={3}
                xs={12}>
                <Weather temperature={10} state= "sunny" />

            </Grid>
        </Grid>
        </ListItem>
    )
}

const Citylist = ({cities, onClickCity}) => {
    return (
        <List>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
            }
        </List>
    )
}   

// como podemos valorar esta validacion?

Citylist.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func,
}

export default Citylist
