import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container, Divider, ListItem } from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MensC from './pages/Men\'s clothing/MensC';
import WomensC from './pages/Women\'s clothing/WomensC';
import Common from './components/Common'
function App() {


  const [count, setCount] = useState(0)
 



  return (
    <>
      <h1 style={{textAlign:"center"}}>Modern Walk</h1>
      <Divider/>
      <h2>Flash sale</h2>
      <Box sx={{ flexGrow:1 }}>
      <Grid container spacing={2} marginLeft={4}>
        <Grid item xs>
          <Common name={"Men's cotton Jacket"} description={"Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking..."} bgcolor={"#2BD9AF"} price={"Rs.55.99"} pic={"../src/components/men.png"} />
        </Grid>
        <Grid item xs>
        <Common name={"Women's Short Sleeve"} description={" 100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk..."} bgcolor={"#FF5E84"} price={"Rs 7.95"} pic={"../src/components/wmn.png"} />
       
        </Grid>
        <Grid item xs>
          <Common name={"Men's cotton Jacket"} description={"Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking..."} bgcolor={"#2BD9AF"} price={"Rs.55.99"} pic={"../src/components/men.png"} />
        </Grid>
        <Grid item xs>
        <Common name={"Women's Short Sleeve"} description={" 100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk..."} bgcolor={"#FF5E84"} price={"Rs 7.95"} pic={"../src/components/wmn.png"} />
       
        </Grid>
      </Grid>
      </Box>
      <h2>Categories</h2>
      <list >
        <listitem><button className='clothin' style={{backgroundColor:"#2BD9AF", color:"white",fontSize:"30px"  }}>Men's Clothing</button></listitem>
        <listitem><button className='clothin'style={{backgroundColor:"#FF5E84", color:"white",fontSize:"30px"}}  >Women's Clothing</button></listitem>
      </list>
      <MensC/>
        <WomensC/>

     

      
    </>
  )
}

export default App
