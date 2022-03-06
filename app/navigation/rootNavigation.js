import React from 'react'

export const navigationRef = React.createRef();

const navigate = (name, params) => {
    // if (!navigationRef.current)
    //     navigationRef.current.navigate(name, params);
    navigationRef.current?.navigate(name, params); //this and the above expression has the same meaning and it is called null coalescing operator (?. (question mark and a dot))
    // console.log(navigationRef);
}

export default {
    navigate,
}

