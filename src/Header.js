import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';


function Header() {
  return (
<div className='header'>
        <h3>this is the header</h3>

    <div className='header_left'>
        <img src='' alt='' />

        <div classNAme='header_search'>
            <SearchIcon/>
          <input type='text' />
        </div>
    </div>

    <div className='header_right'>

    </div>

</div>
  )
}

export default Header