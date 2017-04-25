import React, { Component } from 'react';
import CalendarHeader from '../calendar-header/CalendarHeader'
import CalendarBody from '../calendar-body/CalendarBody'
import CalendarFooter from '../calendar-footer/CalendarFooter'
import './styles/calendar.css';

class Calendar extends Component {

	getCalendarClasses() {
		let classes = 'calendar';
		
		if (this.props.isOpen) {
			classes += ' calendar-show';
		} else {
			classes += ' calendar-hide';
		}

		return classes;
	}

	render() {
		let calendarClasses = this.getCalendarClasses();

		return (
		
			<div className={calendarClasses}>

				<CalendarHeader 
					closeCalendar={this.props.onToggle} 
					clearDates={this.props.clearDates}
					dateSelection={this.props.dateSelection}
					startDate={this.props.startDate}
					startDateLabel={this.props.startDateLabel}
					endDateLabel={this.props.endDateLabel}>
				</CalendarHeader>

				<CalendarBody 
					startDate={this.props.startDate} 
					endDate={this.props.endDate}
					dateFormat={this.props.dateFormat}
					dayIndex={this.props.dayIndex}
					dateClick={this.props.dateClick}
					hasCleared={this.props.hasCleared}
					scrolledToTop={this.props.scrolledToTop}>
				</CalendarBody>

				<CalendarFooter
					dateSelection={this.props.dateSelection}
					startDate={this.props.startDate}
					endDate={this.props.endDate}
					doneCalendar={this.props.onToggle}>
				</CalendarFooter>
			</div>
		);
	}
}

export default Calendar;
