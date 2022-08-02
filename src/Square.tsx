import React from 'react'

interface Isquare {
    state: string;
    onClick(): void;
}

const square:React.FC<Isquare> = (props) => {
  return (
    <div>
        <span className='column__Style' >{props.state}</span>
    </div>
  )
}

export default square