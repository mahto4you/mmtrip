import React from 'react';
import TitleText from './TitleText';
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
import BodyText from './BodyText';
const Footer = () => {
	return (
		<>
			<Box>
				<BodyText textStyle={{ textAlign: 'right', color: 'white' }}>
					Copyright © 2022 DPauls.com. All rights reserved.
				</BodyText>
			</Box>
		</>
	);
};

export default Footer;
