import React from 'react'

const MemberInfo = ({team,pitcher}) => {
  return (
    
        <div className='memberinfo'>
            <h3>{team}</h3>
            <span>{pitcher}</span>
        </div>
    
  )
}

export default MemberInfo