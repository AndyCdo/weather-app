import React, { Component } from 'react'
import CityInfo from "./CityInfo"
import "typeface-roboto"

export default {
    title: "CityInfo",
    Component: CityInfo
}

export const CityExample = () => <CityInfo city= {"Bogota"} country= {"Colombia"}></CityInfo>
