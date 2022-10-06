import './App.css';
import Button from '@mui/material/Button';
import HoverRating from './Rating';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

function App() {
	return (
		<div className='App'>
			<h1>holaa</h1>
			<Button variant='contained'>
				Hello World <ArrowCircleUpIcon />
			</Button>
			<HoverRating />
		</div>
	);
}

export default App;
