import React from 'react';
import moment from 'moment';
import Helmet from 'react-helmet';

import DayPickerInput from 'react-day-picker/DayPickerInput';
// import 'react-day-picker/lib/style.css';
import '../../../node_modules/react-day-picker/lib/style.css';

import { formatDate, parseDate } from 'react-day-picker/moment';
import { withStyles } from '@material-ui/core';
const styles = (theme) => ({
	root: {
		'& .InputFromTo': {
			'& .DayPickerInput input': {
				// border: 'none',
				// borderRight: '1px solid #e1e1e1',
				// padding: '20px 18px',
				fontSize: '12px',
				paddingLeft: 16,
				// color: '#313131',
				// backgroundColor: '#fff',
				// height: '60px',
				// borderRadius: 0,
				// width: '100%',
				height: 60,
				width: '85%',
			},
		},
	},
});
class Example extends React.Component {
	constructor(props) {
		super(props);
		this.handleFromChange = this.handleFromChange.bind(this);
		this.handleToChange = this.handleToChange.bind(this);
		this.state = {
			from: undefined,
			to: undefined,
		};
	}

	showFromMonth() {
		const { from, to } = this.state;
		if (!from) {
			return;
		}
		if (moment(to).diff(moment(from), 'months') < 2) {
			this.to.getDayPicker().showMonth(from);
		}
	}

	handleFromChange(from) {
		// Change the from date and focus the "to" input field
		this.setState({ from });
	}

	handleToChange(to) {
		this.setState({ to }, this.showFromMonth);
	}

	render() {
		const { from, to } = this.state;
		const modifiers = { start: from, end: to };
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<div className='InputFromTo' style={{ display: 'flex' }}>
					<DayPickerInput
						value={from}
						placeholder='From'
						format='LL'
						formatDate={formatDate}
						parseDate={parseDate}
						dayPickerProps={{
							selectedDays: [from, { from, to }],
							disabledDays: { after: to },
							toMonth: to,
							modifiers,
							numberOfMonths: 2,
							onDayClick: () => this.to.getInput().focus(),
						}}
						onDayChange={this.handleFromChange}
					/>{' '}
					{/* <span style={{ color: 'white', marginTop: 20 }}>— </span> */}
					<span className='InputFromTo-to'>
						<DayPickerInput
							ref={(el) => (this.to = el)}
							value={to}
							placeholder='To'
							format='LL'
							formatDate={formatDate}
							parseDate={parseDate}
							dayPickerProps={{
								selectedDays: [from, { from, to }],
								disabledDays: { before: from },
								modifiers,
								month: from,
								fromMonth: from,
								numberOfMonths: 2,
							}}
							onDayChange={this.handleToChange}
						/>
					</span>
					<Helmet>
						<style>{`
  .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .InputFromTo .DayPicker-Day {
    border-radius: 0 !important;
  }
  .InputFromTo .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .InputFromTo .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
  .InputFromTo .DayPickerInput-Overlay {
    width: 550px;
  }
  .InputFromTo-to .DayPickerInput-Overlay {
    margin-left: -198px;
  }
`}</style>
					</Helmet>
				</div>
			</div>
		);
	}
}
export default withStyles(styles)(Example);
