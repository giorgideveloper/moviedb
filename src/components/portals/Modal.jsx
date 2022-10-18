import { createPortal } from 'react-dom';

function Modal(props) {
	if (!props.isOpen) return null;

	return createPortal(
		<>
			<div className='overlay'></div>
			<div className='modalPortal'>
				{props.children}
				<div>
					<button onClick={props.handleClose}>close</button>
				</div>
			</div>
		</>,
		document.getElementById('modal')
	);
}

export default Modal;
