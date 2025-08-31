import React, { useState } from 'react'

const Header = () => {

    const [value, setValue] = useState(0)
  return (
    <div>
      <input type="text" placeholder='password'
      value={value}
      onChange={()=>setValue(value+1)}/>
    </div>
  )
}

export default Header
