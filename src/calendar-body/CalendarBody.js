import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import CalendarMonth from './CalendarMonth';
import './styles/calendar-body.css';

class CalendarBody extends Component {

	constructor(props) {
		super(props);

		this.state = {
			months: this.addMonths()
		};

		this.handleScroll = this.handleScroll.bind(this);
	}

	handleScroll() {
		var bounds = document.querySelector('.calendar-body').getBoundingClientRect(),
			bottomPosition = bounds.bottom - window.innerHeight,
			bottomMinimum = 200,
			months = null;

		if (bottomPosition < bottomMinimum) {

			months = this.addMonths(this.state.months);

			this.setState({
	    		months: months
	    	});
		}
	}

	componentDidMount() {
    	window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    componentDidUpdate() {
    	var node = ReactDOM.findDOMNode(this);

    	if (this.props.hasCleared) {
    		node.scrollTop = 0;
    		this.props.scrolledToTop();
    	}
    }

    addMonths(existingMonths) {
    	var months = [],
    		monthLength = 0,
    		monthLengthInit = 12,
    		monthLengthAppend = 4,
    		startIndex = 0;

    	if (typeof(existingMonths) !== 'undefined' && existingMonths) {
    		months = existingMonths;
    		startIndex = existingMonths.length;
    		monthLength = monthLengthAppend + startIndex;
    	} else {
	    	monthLength = monthLengthInit;
		}

		for (let i = startIndex; i < monthLength; i++) {
			months.push(moment().add(i, 'month').startOf('month'));
		}

		return months;
    }

	render() {
		var months = this.state.months,
			monthsList = [],
			startDate = this.props.startDate,
			endDate = this.props.endDate,
			dateClick = this.props.dateClick,
			dayIndex = this.props.dayIndex;

		monthsList = months.map(function(month, index) {
				return <CalendarMonth key={index} 
						month={month}
						startDate={startDate} 
						endDate={endDate}
						dateClick={dateClick}
						dayIndex={dayIndex}>
					</CalendarMonth>
			}, this);

		return (
			<div className="calendar-body-wrapper" onScroll={this.handleScroll}>
				<div className="calendar-body">
					{monthsList}
				</div>
			</div>
		);
	}
}

export default CalendarBody;
