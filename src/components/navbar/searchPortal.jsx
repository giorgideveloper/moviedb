import * as React from 'react';

export default function SearchPortal({ SearchMovie }) {
	return (
		<>
			<div className='search_bar'>
				<section className='search show_search_false'>
					<div className='sub_media'>
						<form id='search_form' action='/search'>
							<label>
								<span
									tabIndex='1'
									role='presentation'
									className='k-widget k-autocomplete k-autocomplete-clearable k-state-default'
								></span>
								<input
									type='text'
									name='query'
									tabIndex='1'
									autoCorrect='off'
									autofill='off'
									placeholder='Search for a movie, tv show, person...'
									onChange={SearchMovie}
								/>
							</label>
						</form>
					</div>
				</section>
			</div>
		</>
	);
}
