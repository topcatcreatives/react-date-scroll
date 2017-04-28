import React, { Component } from 'react';
import DateScroll from 'react-date-scroll';
import CalendarForm from './calendar-form/CalendarForm';
import './styles/App.css';

class App extends Component {
	
	constructor(props) {
		
		super(props);

		this.state = {
			openDatePicker: false,
			startDate: null,
			endDate: null
		};

		this.datePickerToggle = this.datePickerToggle.bind(this);
		this.onDatesChange = this.onDatesChange.bind(this);
	}

	datePickerToggle() {
		this.setState({
			openDatePicker: !this.state.openDatePicker
		});
	}

	onDatesChange(startDate, endDate) {
		this.setState({
			startDate: startDate,
			endDate: endDate
		})
	}

	render() {
		const toggle = this.state.openDatePicker,
			dateFormat = 'DD-MM-YYYY',
			dayIndex = 1,
			startDate = this.state.startDate,
			endDate = this.state.endDate,
			startDateLabel = 'departure date',
			endDateLabel = 'arrival date';

		return (
			<div className="App">
				<div className="container">
			
					<h1>
						Just an example
						<small>using date scroll</small>
					</h1>

					<CalendarForm 
						datePickerToggle={this.datePickerToggle}
						startDate={startDate}
						endDate={endDate}>
					</CalendarForm>
					
					<DateScroll
						startDate={startDate}
						endDate={endDate}
						dateFormat={dateFormat}
						dayIndex={dayIndex}
						isOpen={toggle}
						onDatesChange={this.onDatesChange}
						onToggle={this.datePickerToggle}
						startDateLabel={startDateLabel}
						endDateLabel={endDateLabel}>
					</DateScroll>

				</div>
			</div>
		);
	}
}

export default App;
