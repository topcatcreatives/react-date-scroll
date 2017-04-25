import React, { Component } from 'react';
import './styles/calendar-footer.css';

class CalendarFooter extends Component {
	
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.doneCalendar();
	}

	render() {
		const showButton = (this.props.dateSelection === 0 && 
			this.props.startDate !== null && 
			this.props.endDate !== null);

		if (!showButton) {
			return null;
		}

		return (
			<div className="calendar-footer">
				<div className="calendar-footer-container">
					<button className="button-done" onClick={this.handleClick}>Done</button>
				</div>
			</div>
		);
	}
}

export default CalendarFooter;
