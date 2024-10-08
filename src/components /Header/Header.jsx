import React from "react";
import s from './Header.module.css'
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const Header=()=>{
    return (
        <div className={s.header}>
            <header>
                <AppBar position="fixed">
                    <Container fixed>
                        <Toolbar>
                            <Container>
                                <Typography variant="h5" color="textSecondary">Долгих Никита</Typography>
                            </Container>
                            <Typography variant="h6">Машина случайных цитат</Typography>
                        </Toolbar>
                    </Container>
                </AppBar>
            </header>
        </div>
    )
}

export default Header