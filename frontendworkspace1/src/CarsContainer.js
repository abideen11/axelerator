import React from 'react';
import CarsContent from './CarsContent';
import { GridList, GridListTile } from '@material-ui/core'

export default class CarsContainer extends React.Component {
    render() {
        return(
            <div className="div-cn">
                <div className="sub-cn">
                    <h3 className="h-ctg">Category:</h3>
                    <select className="sel-ctg" value={this.props.value} onChange={(e) => this.props.onFilterCar(e.target.value)}>
                        <option value="Please select a category">Please select a category</option>
                        <option value="Coupe">Coupe</option>
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                        <option value="Truck">Truck</option>
                        <option value="Van">Van</option>
                        <option value="Crossover">Crossover</option>
                    </select>
                    <h3 className="h-yr">Year:</h3>
                    <select className="sel-yr" value={this.props.value} onChange={(e) => this.props.onFilterCar(e.target.value)}>
                        <option value="Please select a year">Please select a year</option>
                        <option value="2008">2008</option>
                        <option value="2010">2010</option>
                        <option value="2012">2012</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2017">2017</option>
                        <option value="2020">2020</option>
                    </select>
                    <h3 className="h-mil">Mileage:</h3>
                    <select className="sel-mil" value={this.props.value} onChange={(e) => this.props.onFilterCar(e.target.value)}>
                        <option value="Please choose a range">Please choose a range</option>
                        <option value="50000">0 - 50,000</option>
                        <option value="100000">50,000 - 100,000</option>
                        <option value="150000">100,000 - 150,000</option>
                    </select>
                    <h3 className="h-pri">Price:</h3>
                    <select className="sel-pri" value={this.props.value} onChange={(e) => this.props.onFilterCar(e.target.value)}>
                        <option value="Please choose a range">Please choose a range</option>
                        <option value="200">$0 - $200</option>
                        <option value="400">$200 - $400</option>
                        <option value="600">$400 - $600</option>
                    </select>
                    <hr></hr>
                    {/* <h5 className="h-br">Select Brand</h5>
                    <select className="sel-br">
                        <option value="lexus">Lexus</option>
                        <option value="hyundai">Hyundai</option>
                        <option value="ford">Ford</option>
                        <option value="chevrolet">Chevrolet</option>
                        <option value="nissan">Nissan</option>
                        <option value="volkswagen">Volkswagen</option>
                        <option value="chrysler">Chrysler</option>
                    </select>
                    <h5 className="h-mod">Select Model</h5>
                    <select className="sel-mod">
                        <option value="type1">Based on selected brand</option>
                        <option value="type2">Based on selected brand</option>
                    </select> */}
                </div>
                <div className="sub-cn2">
                    {this.props.carsArray.map(car => <CarsContent car={car} onClickedCar={this.props.onClickedCar} />)}
                    {/* {this.props.firstColArray.map(car1 => <CarsContent car1={car1} /> )} */}
                    {/* <CarsContent car={car} /> */}
                </div>
            </div>
        )
    }
}
