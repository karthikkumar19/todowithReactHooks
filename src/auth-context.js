import React from 'react';

const authContext = React.createContext({status:'',login:() => {}});

export default authContext;