import React, { useEffect, useRef, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import ApiService from '../../service/ApiService';

function TheSearch() {
	const [searchContent, setSearchContent] = useState('');

	/* 	const Search = styled('div')(({ theme }) => ({
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	}));
	const SearchIconWrapper = styled('div')(({ theme }) => ({
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}));
	const StyledInputBase = styled(InputBase)(({ theme }) => ({
		color: 'inherit',
		'& .MuiInputBase-input': {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)})`,
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				width: '12ch',
				'&:focus': {
					width: '20ch',
				},
			},
		},
	}));
 */
	const SearchMovie = e => {
		if (e.target.value.length >= 3) {
			ApiService.getSearch(e.target.value).then(search => {
				setSearchContent(search.data.results);
			});
		}
		if (e.target.value.length <= 2) {
			setSearchContent('');
		}
	};

	return (
		<>
			<input onChange={SearchMovie} />
			{searchContent.length >= 3 ? (
				<ul>
					{searchContent.map(item => (
						<li key={item.id}>{item.title}</li>
					))}
				</ul>
			) : (
				searchContent
			)}
		</>
	);
}

export default TheSearch;
