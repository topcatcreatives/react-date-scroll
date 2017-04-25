import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import Calendar from './calendar/Calendar'
import './styles/date-scroll.css';

class DateScroll extends Component {

	constructor(props) {
	    super(props);

	    this.handleDateClick = this.handleDateClick.bind(this);
	    this.handleClearDatesClick = this.handleClearDatesClick.bind(this);
	    this.handleScrolledToTop = this.handleScrolledToTop.bind(this);

	    this.state = {
	    	dateSelection: 0,
	    	clearedDates: false
	    };
	}

	static propTypes = {
        dateFormat: PropTypes.string,
        startDateLabel: PropTypes.string,
        endDateDateLabel: PropTypes.string,
        dayIndex: PropTypes.number
    }

    static defaultProps = {
    	dateFormat: 'DD-MM-YYYY',
    	startDateLabel: 'start date',
    	endDateLabel: 'end date',
    	dayIndex: 1
    }

	handleDateClick(date) {
		let startDate = null,
			endDate = null,
			formattedDate = moment(date).format(this.props.dateFormat);
		
		if (this.state.dateSelection === 0 ||
			moment(date).isBefore(moment(this.props.startDate, this.props.dateFormat))) {
			
			this.setState({
				dateSelection: 1,
				clearedDates: false
			});

			startDate = formattedDate;

		} else if (this.state.dateSelection === 1) {
				
			this.setState({
				dateSelection: 0,
				clearedDates: false
			});

			startDate = this.props.startDate;
			endDate = formattedDate;
		}

		this.props.onDatesChange(startDate, endDate);
	}

	handleClearDatesClick() {
		
		this.setState({
			dateSelection: 0,
			clearedDates: true
		});

		this.props.onDatesChange(null, null);
	}

	handleScrolledToTop() {

		this.setState({
			clearedDates: false
		});
		
	}

	render() {
		let dateFormat = this.props.dateFormat,
			dayIndex = this.props.dayIndex,
			startDate = this.props.startDate,
			endDate = this.props.endDate,
			startDateLabel = this.props.startDateLabel,
			endDateLabel = this.props.endDateLabel,
			dateSelection = this.state.dateSelection,
			isOpen = this.props.isOpen,
			hasCleared = this.state.clearedDates,
			onToggle = this.props.onToggle;

		 if (this.props.startDate !== null) {
		 	startDate = moment(this.props.startDate, this.props.dateFormat);
		 }

		 if (this.props.endDate !== null) {
		 	endDate = moment(this.props.endDate, this.props.dateFormat);
		 }

		return (

			<div className="date-scroll">

				<Calendar
					onToggle={onToggle} 
					isOpen={isOpen}
					clearDates={this.handleClearDatesClick}
					hasCleared={hasCleared}
					dateSelection={dateSelection}
					dateFormat={dateFormat}
					dayIndex={dayIndex}
					startDate={startDate}
					endDate={endDate}
					dateClick={this.handleDateClick}
					scrolledToTop={this.handleScrolledToTop}
					startDateLabel={startDateLabel}
					endDateLabel={endDateLabel}>
				</Calendar>

			</div>
		);
	}
}

export default DateScroll;
