import React, { Component } from 'react';
import './styles/calendar-header.css';

class CalendarHeader extends Component {

	constructor(props) {
		super(props);

		this.handleClear = this.handleClear.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClear(e) {
		e.preventDefault();
		this.props.clearDates();
	}

	handleClose(e) {
		e.preventDefault();
		this.props.closeCalendar();
	}

	render() {
		let labelStatus = '';

		if (this.props.dateSelection === 0 && this.props.startDate === null) {
			labelStatus = 'Select a ' + this.props.startDateLabel;
		} else if (this.props.dateSelection === 1) {
			labelStatus = 'Select a ' + this.props.endDateLabel;
		}

		return (
			<div className="calendar-header">
				<div className="calendar-header-buttons">
					<a className="button button-clear" onClick={this.handleClear}>
						Clear
					</a>
					<div className="calendar-header-status">
						{labelStatus}
					</div>
					<a className="button button-close" onClick={this.handleClose}>
						Close
					</a>
				</div>
			</div>
		);
	}
}

export default CalendarHeader;
