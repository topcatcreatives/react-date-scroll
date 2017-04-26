import React, { Component } from 'react';
import './styles/calendar-form.css';

class CalendarForm extends Component {

	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.datePickerToggle();
	}

	render() {

		let startDate = "",
			endDate = "";

		if (this.props.startDate !== null) {
			startDate = this.props.startDate;
		}

		if (this.props.endDate !== null) {
			endDate = this.props.endDate;
		}
	
		return (
			<div className="calendar-form">
				<form>
					<div className="row">
						<div className="col-100">
		  					<div className="form-group">
		  						<label>Where</label>
		    					<input type="text" className="form-control" name="destination" autoComplete="off" placeholder="Destination, city, or address" />
		  					</div>
		  				</div>
		  			</div>
		  			<div className="row space-top">
		  				<div className="col-100">
		  					<label>When</label>
		  				</div>
		  			</div>
					<div className="row">
						<div className="col-50">
		  					<div className="form-group">
		    					<input type="text" className="form-control" value={startDate} name="start-date" readOnly="true" autoComplete="off" placeholder="Departure date" onClick={this.handleClick} />
		  					</div>
		  				</div>
		  				<div className="col-50">
		  					<div className="form-group">
		    					<input type="text" className="form-control" value={endDate} name="end-date" readOnly="true" autoComplete="off" placeholder="Arrival date" onClick={this.handleClick} />
		  					</div>
		  				</div>
		  			</div>

		  			<div className="row space-top-large">
		  				<div className="col-100">
		  					<div className="form-group">
		    					<button type="text" className="btn">Search</button>
		  					</div>
		  				</div>
		  			</div>
  				</form>
			
			</div>
		);	
	}
}

export default CalendarForm;
