import React from "react";
import s from './Content.module.css'
import { useState } from "react";
import { Box, Button,Container, Grid, Typography } from "@mui/material";

const Content = ()=>{
    let colors = ["#14cc8d", "#1481cc", "#cc3114", "#bb14cc", "#14ccbb", "#5f14cc", "#cc8d14"]
    const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&amp;key=random&amp;format=jsonp&amp;lang=ru&amp;jsonp=?'
    fetch("https://api.forismatic.com/api/1.0/?method=getQuote&key=random&format=jsonp&lang=ru&jsonp=?").then((r)=>{
        console.log(r.text().then(data=>console.log(data)))
    })
    
    const [color, setColor] = useState(1)
    const [quotes,setQuotes] = useState()
    const handleClick = ()=>{
        let el = Math.floor(Math.random()*8)
        setColor(el)
    }
    return (
        <div className={s.content} style={{
            backgroundColor: colors[color],
        }}>
            <div>
                <Grid container justifyContent='center'>
                    <Grid item>
                        <Container maxWidth="sm">
                            <Typography variant="h5" color="inherit" gutterBottom> Случайная цитата</Typography>
                        </Container>
                    </Grid>
                </Grid>
                <Grid container justifyContent='center'>
                    <Grid item>
                        <Container >
                            <Typography></Typography>
                        </Container>
                    </Grid>
                </Grid>
                <Grid container justifyContent='center'>
                    <Grid item>
                        <Box>
                            <Button variant="contained" onClick={handleClick}>Новая цитата</Button>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Content