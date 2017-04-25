import React, { Component } from 'react';
import './styles/calendar-date.css';

class CalendarDate extends Component {

	constructor(props) {
	    super(props);

	    this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		if (this.props.date !== null) {
			this.props.dateClick(this.props.date);
		}
	}

	render() {

		let date = this.props.date,
			formattedDate = (date === null) ? '' : date.format('D'),
			classNames = 'calendar-date';

		if (date !== null) {
			if (this.props.startDate !== null && this.props.startDate.isSame(this.props.date)) {
				classNames += ' calendar-date-selected'
			}

			if (this.props.endDate !== null && this.props.endDate.isSame(this.props.date)) {
				classNames += ' calendar-date-selected'	
			}

			if (this.props.startDate !== null && this.props.endDate !== null) {

				if (date.isAfter(this.props.startDate) && 
					date.isBefore(this.props.endDate)) {
					classNames += ' calendar-date-in-range'	
				}
			}
		}

		return (
			<div className={classNames} onClick={this.handleClick}>
				<div className="calendar-date-content-wrapper">
					<div className="calendar-date-content">
						{formattedDate}
					</div>
				</div>
			</div>
		);
	}
}

export default CalendarDate;
