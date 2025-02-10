import React from "react";
import cars from "../practices";


const [honda, tesla] = cars;

const {model, coloursByPopularity, speedStats} = honda;
const {topSpeed} = speedStats;

const {model, coloursByPopularity, speedStats} = tesla;
const {topSpeed} = speedStats

function Table(){
    return(
   <table>
            <tr>
            <th>Brand</th>
            <th>Top Speed</th>
            </tr>
            <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{coloursByPopularityteslaTopColour}</td>
            </tr>
            <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
            </tr>
    </table>
    )
}
export default Table;