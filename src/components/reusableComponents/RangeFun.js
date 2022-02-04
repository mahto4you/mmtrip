import React, { useState, useRef } from 'react';
import moment from 'moment';
import Helmet from 'react-helmet';
import {
	Box,
	Container,
	Grid,
	Drawer,
	makeStyles,
	Divider,
	Avatar,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Chip,
} from '@material-ui/core';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import '../../../node_modules/react-day-picker/lib/style.css';
import { formatDate, parseDate } from 'react-day-picker/moment';
const useStyles = makeStyles((theme) => ({
	root: {
		'& .InputFromTo': {
			'& .DayPickerInput input': {
				// border: 'none',
				// borderRight: '1px solid #e1e1e1',
				// padding: '20px 18px',
				fontSize: '0.875rem',
				paddingLeft: 16,
				// color: '#313131',
				// backgroundColor: '#fff',
				// height: '60px',
				// borderRadius: 0,
				// width: '100%',
				height: 60,
			},
		},
	},
}));
const Range = () => {
	const [from, setFrom] = useState(undefined);
	const classes = useStyles();
	const [to, setTo] = useState(undefined);
	const inputElement = useRef();

	const showFromMonth = () => {
		if (!from) {
			return;
		}
		if (moment(to).diff(moment(from), 'months') < 2) {
			to.getDayPicker().showMonth(from);
		}
	};
	const handleFromChange = (from) => {
		setFrom(from);
	};
	const handleToChange = (to) => {
		setTo(showFromMonth);
	};
	const modifiers = { start: from, end: to };
	const focusInput = () => {
		to = inputElement;
	};
	// focusInput();
	return (
		<>
			<div className={classes.root}>
				<div className='InputFromTo' style={{ display: 'flex' }}>
					<DayPickerInput
						value={from}
						placeholder='From'
						id='r'
						format='LL'
						formatDate={formatDate}
						parseDate={parseDate}
						dayPickerProps={{
							selectedDays: [from, { from, to }],
							disabledDays: { after: to },
							toMonth: to,
							modifiers,
							numberOfMonths: 2,
							onDayClick: () => to.getInput().focus(),
						}}
						onDayChange={handleFromChange}
					/>{' '}
					<span style={{ color: 'white', marginTop: 20 }}>— </span>
					<span className='InputFromTo-to'>
						<DayPickerInput
							// ref={(el) => (this.to = el)}
							ref={(el) => setTo({ to: el })}
							value={to}
							placeholder='Return'
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
							onDayChange={handleToChange}
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
		</>
	);
};

export default Range;
