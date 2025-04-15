import React from 'react'

function Container({children}) {
    return <div className='w-full min-h-96 px-4 flex justify-center'>{children}</div>;
}

export default Container;