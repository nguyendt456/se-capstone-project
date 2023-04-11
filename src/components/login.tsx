import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Box, Collapse, Fade, FormControlLabel, Switch } from "@mui/material";
function Login() {
    const [checkedMenu, setCheckedMenu] = useState(false)

    useEffect(() => {
        setCheckedMenu(true)
    })
    return (
        <div className={`menu ${checkedMenu ? 'open' : 'closed'}`}>
            <Box sx={{
                display: 'flex',
                marginLeft: '75px',
                width: 500,
                height: 500,
                backgroundColor: '#ffffff',
                borderBottomRightRadius: '12px'
            }}
            />
        </div>
    )
}

export default Login;