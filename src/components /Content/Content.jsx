import React from "react";
import s from './Content.module.css'
import { useState } from "react";
import { Box, Button,Container, Grid, Typography } from "@mui/material";

const Content = ()=>{
    let colors = ["#14cc8d", "#1481cc", "#cc3114", "#bb14cc", "#14ccbb", "#5f14cc", "#cc8d14"]
    const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&amp;key=random&amp;format=jsonp&amp;lang=ru&amp;jsonp=?'
    // fetch(url)
    // .then((r)=>r.text())
    // .then(data=>console.log(data))
    
    const [color, setColor] = useState(1)
    const [quotes,setQuotes] = useState('')
    const handleClick = ()=>{
        let el = Math.floor(Math.random()*8)
        setColor(el)
        fetch(url)
        .then((r)=>r.text())
        .then(data=>setQuotes(data))
    }
    let text = ''
    let author = ''
    if (quotes.length>0){
        let startAuthor = quotes.indexOf('<quoteAuthor>')+13
        let endAuthor = quotes.indexOf('</quoteAuthor>')
        let endText = quotes.indexOf('</quoteText>')
        console.log(quotes)
        console.log(startAuthor)
        text = quotes.slice(30,endText)
        author=quotes.slice(startAuthor,endAuthor)
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
                <Grid container justifyContent='center' spacing={2}>
                    <Grid item>
                        <Container >
                            <Typography variant="h6">{text}</Typography>
                        </Container>
                    </Grid>
                </Grid>
                <Grid container justifyContent='center' spacing={2}>
                    <Grid item>
                        <Container >
                            <Typography variant="h6">{author}</Typography>
                        </Container>
                    </Grid>
                </Grid>
                <Grid container justifyContent='center' spacing={2}>
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