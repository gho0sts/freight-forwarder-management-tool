import React, { Component } from 'react';
import './AirlineUpdate.css';
import logo from './logo.svg';
import {connect} from 'react-redux'

class AirlineUpdate extends Component {
    constructor(props) {
        super(props);
        const {updateAirline} = this.props;

        this.state = {
            airFreight: updateAirline.air_freight,
            fuelSurcharge: updateAirline.fuel_surcharge,
            securitySurcharge: updateAirline.security_surcharge,
            screening: updateAirline.screening,
            iataAirlineCode: updateAirline.iata_airline_code,
            airlineName: updateAirline.airline_name,
            airlineType: updateAirline.airline_type,
            airlineId: updateAirline.airline_id
        }
    }

    render() {
        return (
            <div className='airlinerecord'>
                <div className='recheader'>
                    <img src={logo} alt="" />
                    <p>Airline Update View</p>
                    <a href='http://localhost:3005/auth/logout'><button className='btn'><span>Log out</span></button></a>
                </div>
                <div className='recborder'>
                    <form>
                        <p className='formdisplay'>Airline: <input type="text" defaultValue={this.state.airlineName} name="airline_name" /></p>
                        <p className='formdisplay'>IATA Airline Code: <input type="text" defaultValue={this.state.iataAirlineCode}name="iata_airline_code" /></p>
                        <p className='formdisplay'>Airline Type: <input type="text" defaultValue={this.state.airlineType}name="airline_type" /></p>
                        <p className='formdisplay'>Air Freight: <input type="number" defaultValue={this.state.airFreight}name="air_freight" /></p>
                        <p className='formdisplay'>Fuel Surcharge: <input type="number" defaultValue={this.state.fuelSurcharge}name="fuel_surcharge" /></p>
                        <p className='formdisplay'>Security Surcharge: <input type="number" defaultValue={this.state.securitySurcharge}name="security_surcharge" /></p>
                        <p className='formdisplay'>Screening: <input type="number" defaultValue={this.state.screening} name="screening" /></p>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        updateAirline: state.updateAirline
    }
}
export default connect(mapStateToProps)(AirlineUpdate);