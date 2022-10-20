import * as React from 'react';
import Stack from '@mui/material/Stack';

export default function Footer() {
	return (
		<div style={{ marginTop: '5em' }}>
			<div
				style={{
					justifyContent: 'center',
					height: '100%',
					display: 'flex',
					paddingTop: '1.6em',
					paddingBottom: '1em',
					borderTop: '1px solid rgb(71, 71, 71)',
				}}
			>
				<Stack
					direction={{ xs: 'column', sm: 'row' }}
					spacing={{ xs: 1, sm: 2, md: 4 }}
				>
					<div
						style={{
							display: 'flex',
							width: '100%',
						}}
					>
						© All rights reserved.
					</div>
				</Stack>
			</div>
		</div>
	);
}
