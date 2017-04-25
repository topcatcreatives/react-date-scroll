# Date Scroll
## An infinite scroll date range picker

A scrolling date range picker for mobile devices using react. This component allows the user to select a start and end date with a full fly over calendar that scrolls through the months.

## Installing

To install this component using npm

```
npm install date-scroll --save
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
	onDatesChange={this.onDatesChange}
	onToggle={this.datePickerToggle}>
</DateScroll>
```

## Props

- startDate
- endDate
- dateFormat
- isOpen
- onDatesChange
- onToggle
- startDateLabel
- endDateLabel

## Custom styling

To modify or add custom styling to the calendar ... 


## Built With

* [React](https://facebook.github.io/react/) - The web framework used
* [Moment.js](https://momentjs.com/) - Date and time JavaScript utility library

## Authors

**Wesley Warner** - [TopCat Creatives](https://github.com/topcatcreatives)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

