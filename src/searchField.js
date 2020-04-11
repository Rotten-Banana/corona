import React from 'react';

const SearchField = ({onSearch,onEnter}) => {
	return(
		<div className='form_field'>
			<input 
			type='search' 
			placeholder='Name' 
			onChange={onSearch}
			onKeyDown={onEnter}/>
		</div>
	);
}

export default SearchField;