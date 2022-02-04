import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
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
import TitleText from './TitleText';
import BodyText from './BodyText';
const useStyles = makeStyles((theme) => ({
	root: {
		'& .react-autosuggest__input': {
			// border: 'none',
			// borderRight: '1px solid #e1e1e1',
			// padding: '20px 18px',
			fontSize: '0.875rem',
			paddingLeft: 16,

			// color: '#313131',
			// backgroundColor: '#fff',
			// height: '60px',
			// borderRadius: 0,
			width: '100%',
			height: 60,
		},
		'& .react-autosuggest__suggestion': {
			listStyle: 'none',
			padding: 5,
		},
		'& .react-autosuggest__suggestions-container': {
			position: 'absolute',
			minWidth: '320px',
			background: 'white',
			boxShadow: '0 2px 10px rgb(0 0 0 / 18%)',
			maxHeight: '295px',
			overflowY: 'auto',
			zIndex: 3,
		},
		'& .react-autosuggest__suggestions-list': {
			marginBottom: 0,
			listStyle: 'none',
			padding: 0,
		},
	},
}));
const languages = [
	{
		name: 'New Delhi(Del)',
		airport: 'IndraGandhi International Airport',
	},
	{
		name: 'New Delhi(Del)',
		airport: 'IndraGandhi International Airport',
	},
	{
		name: 'New Delhi(Del)',
		airport: 'IndraGandhi International Airport',
	},
	{
		name: 'New Delhi(Del)',
		airport: 'IndraGandhi International Airport',
	},
	{
		name: 'New Delhi(Del)',
		airport: 'IndraGandhi International Airport',
	},
];
const getSuggestions = (value) => {
	const inputValue = value.trim().toLowerCase();
	const inputLength = inputValue.length;

	return inputLength === 0
		? []
		: languages.filter(
				(lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
		  );
};
const getSuggestionValue = (suggestion) => suggestion.name;
const renderSuggestion = (suggestion) => (
	<Box display='flex' justifyContent='space-between'>
		<Box>
			<TitleText one>{suggestion.name}</TitleText>
			<BodyText one>{suggestion.airport}</BodyText>
		</Box>
		<BodyText>IN</BodyText>
	</Box>
);

const SearchTwo = () => {
	const [value, setValue] = useState('');
	const [suggestions, setSuggestions] = useState([]);
	// const { value, suggestions } = this.state;
	const onChange = (event, { newValue }) => {
		setValue(newValue);
	};
	const onSuggestionsClearRequested = () => {
		setSuggestions([]);
	};
	const onSuggestionsFetchRequested = ({ value }) => {
		setSuggestions(getSuggestions(value));
	};
	// Autosuggest will pass through all these props to the input.
	const inputProps = {
		placeholder: 'Going To',
		value,
		onChange: onChange,
	};
	const classes = useStyles();
	return (
		<>
			<div className={classes.root}>
				<Autosuggest
					suggestions={suggestions}
					onSuggestionsFetchRequested={onSuggestionsFetchRequested}
					onSuggestionsClearRequested={onSuggestionsClearRequested}
					getSuggestionValue={getSuggestionValue}
					renderSuggestion={renderSuggestion}
					inputProps={inputProps}
				/>
			</div>
		</>
	);
};

export default SearchTwo;
