import { createPortal } from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

function Modal(props) {
	if (!props.isOpen) return null;

	return createPortal(
		<>
			<div className='overlay'></div>
			<div className='modalPortal'>
				{props.children}
				<div>
					<Button variant='contained' onClick={props.handleClose}>
						<CloseIcon />
					</Button>
				</div>
			</div>
		</>,
		document.getElementById('modal')
	);
}

export default Modal;
