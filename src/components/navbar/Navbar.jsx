import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import logo from './logo/tmdb.svg';
import './style.css';
import { Link } from 'react-router-dom';
import ApiService from '../../service/ApiService';
import SearchIcon from '@mui/icons-material/Search';

const drawerWidth = 240;
const navItems = [
	{ id: 1, title: 'Home', page: '/' },
	{ id: 2, title: 'Movies', page: 'MoviesPage' },
	{ id: 3, title: 'Serials', page: 'SerialsPage' },
];

function DrawerAppBar(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const SearchMovie = e => {
		if (e.target.value.length >= 3) {
			ApiService.getSearch(e.target.value).then(search => {
				props.setSearchContent(search.data.results);
			});
			props.setBlock('block');
		}
		if (e.target.value.length <= 2) {
			props.setSearchContent('');
		}
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant='h6' sx={{ my: 2 }}>
				MUI
			</Typography>
			<Divider />
			<List>
				{navItems.map(item => (
					<ListItem key={item.id} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<ListItemText primary={item.title} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex', marginBottom: '5em' }}>
			<AppBar component='nav' style={{ backgroundColor: '#032541 !important' }}>
				<Container>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='start'
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { sm: 'none' } }}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							variant='h6'
							component='div'
							sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
						>
							<Link to={'/'}>
								<img
									className='logo'
									src={logo}
									width='100'
									height='100'
									alt=''
								/>
							</Link>
						</Typography>
						<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
							{navItems.map(item => (
								<Button key={item.id} sx={{ color: '#fff' }}>
									<Link style={{ color: '#fff' }} to={item.page}>
										{' '}
										{item.title}
									</Link>
								</Button>
							))}
						</Box>
						{/* search */} <SearchIcon style={{ fontSize: '1.9em' }} />
						{/* <input onChange={SearchMovie} /> */}
					</Toolbar>
				</Container>
			</AppBar>

			<Box component='nav'>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>
			<Box>search</Box>
		</Box>
	);
}

DrawerAppBar.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default DrawerAppBar;
