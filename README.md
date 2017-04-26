# Date Scroll

**An infinite scroll date range picker**

A scrolling date range picker for mobile devices using react. This component allows the user to select a start and end date with a full fly over calendar that scrolls through the months.

## Installing

To install this component using npm

```
npm install react-date-scroll --save
```

## Quickstart

To include the 'react-date-scroll' component in your project, simply import the component

```
import DateScroll from 'react-date-scroll';
```

And then add the markup to use the component. Below is the minimal markup required

```
<DateScroll
	startDate={startDate}
	endDate={endDate}
	isOpen={toggle}
	onDatesChange={this.onDatesChangeCallback}
	onToggle={this.datePickerToggleCallback}>
</DateScroll>
```

## Props

### startDate (string | default: null)

The start date of the date range in a string format. The format can then be defined in the 'dateFormat' prop.

### endDate (string | default: null)

The end date of the date range in a string format. The format can then be defined in the 'dateFormat' prop.

***Note*** *startDate and endDate must have the same format.*

### dateFormat (string | default: 'DD-MM-YYYY')

The date format of the start and end date. Check out the Moment.js [docs](https://momentjs.com/docs/#/displaying/) for the various formats you can use.

```
Typical examples

'DD-MM-YYYYY'		// 26-04-2017
'YYYY-MM-DD'		// 2017-04-26
'Do MMMM YYYY' 		// 26th April 2017
'DD MMM YY' 		// 26 Apr 17 

```

### dayIndex (number | default: 1)

This is index of the first day displayed in the calendar months.

```
1 = Mon, 2 = Tue, ... 7 = Sun
```

### isOpen (boolean | default: false)

Close or open the flyover calendar by setting to true or false.

### onDatesChange (function)

If dates have been changed in the react-date-scroll component, this callback will be notified. Use something like this in your parent component.

```
onDatesChangeCallback(startDate, endDate) {
	this.setState({
		startDate: startDate,
		endDate: endDate
	})
}

```
And then set this function as the prop as shown in the minimal markup above.


### onToggle (function)

If the calendar flyover is opended or closed in the react-date-scroll component, this callback will be notified. Use something like this in your parent component.

```
datePickerToggleCallback() {
	this.setState({
		openDatePicker: !this.state.openDatePicker
	});
}
```
And then set this function as the prop as shown in the minimal markup above.

***Note*** *this.state.openDatePicker used in this example can then be assigned to the toggle prop to determine whether to open or close the calendar*

### startDateLabel (string | default: 'start date')

Set a custom start date label that is displayed on the header of the calendar when the user is selecting the start date.

### endDateLabel (string | default: 'end date')

Set a custom end date label that is displayed on the header of the calendar when the user is selecting the end date.

## Example

The example can be installed and run from within that example folder. This will help to see what is needed to get the component up and running.

```
cd example

npm install

npm start
```

## Custom styling

To modify or add custom styling to the calendar ... To do

## Built With

* [React](https://facebook.github.io/react/) - The web framework used
* [Moment.js](https://momentjs.com/) - Date and time JavaScript utility library

## Authors

**Wesley Warner** - [TopCat Creatives](https://github.com/topcatcreatives)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

