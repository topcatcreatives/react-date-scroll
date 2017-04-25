import React, { Component } from 'react';
import moment from 'moment'	;
import CalendarDate from './CalendarDate';
import './styles/calendar-month.css';

class CalendarMonth extends Component {

	getDays() {
		var days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
			daysBefore = [],
			daysAfter = [];

		if (this.props.dayIndex > 1) {
			daysBefore = days.slice(0, this.props.dayIndex - 1);
			daysAfter = days.slice(this.props.dayIndex - 1);
			days = daysAfter.concat(daysBefore);
		}

		return days;
	}

	render() {
		var monthDate = this.props.month,
			daysInMonth = monthDate.daysInMonth(),
			dates = [],
			datesList = [],
			startDayIndex = null,
			days = this.getDays(),
			daysList = [],
			datesGap = [],
			weekday = null,
			monthFormat = 'MMMM YYYY';

		for (let i = 0; i < daysInMonth; i++) {
			let date = moment(monthDate).add(i, 'days');
			dates.push(date);
		}

		datesList = dates.map(function(date, index) {
			return <CalendarDate key={index} 
					date={date}
					startDate={this.props.startDate}
					endDate={this.props.endDate}
					dateClick={this.props.dateClick}>
				</CalendarDate>
		}, this);

		weekday = dates[0].format('dd');
		startDayIndex = days.indexOf(weekday);

		if (startDayIndex > 0) {
			datesGap = Array.from(new Array(startDayIndex), function(date, index) {
				return <CalendarDate key={index}
						date={null}>
					</CalendarDate>
			});
		}

		daysList = days.map(function(day, index) {
			return <div key={index} className="calendar-month-day">
					<div className="calendar-month-day-content">
						{day}
					</div>
				</div>
		});

		return (
			<div className="calendar-month">
				<div className="calendar-month-header">
					{monthDate.format(monthFormat)}
				</div>
				<div className="calendar-month-days">
					{daysList}
				</div>
				<div className="calendar-month-body">
					{datesGap}
					{datesList}
				</div>
			</div>
		);
	}
}

export default CalendarMonth;
