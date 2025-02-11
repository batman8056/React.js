import React from "react";
import cars from "../practices.js";


const [honda, tesla] = cars;

const {model:teslaModel, coloursByPopularity:hondaTopColour, speedStats:speedStatsHonda} = honda;
const {topSpeed :hondaTopSpeed} = speedStatsHonda;

const {model:hondaModel, coloursByPopularity:coloursByPopularityteslaTopColour, speedStats:speedStatsTesla} = tesla;
const {topSpeed:teslaTopSpeed} = speedStatsTesla

function Table(){
    return(
   <table>
            <tr>
            <th>Brand</th>
            <th>Top Speed</th>
            <th>Top Colour</th>
            </tr>
            <tr>
            <td>{teslaModel}</td>
            <td>{teslaTopSpeed}</td>
            <td>{coloursByPopularityteslaTopColour}</td>
            </tr>
            <tr>
            <td>{hondaModel}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
            </tr>
    </table>
    )
}
export default Table;