import React from 'react'
//import './App.css'
//import Navbar from "./Navbar"
import "./styles.css"
import Quote from '/src/components/Quote'
import TextDetails from './components/TextDetails'

const logo =  '/src/images/logo.png'
function NavNames() {
    const data = [
        {
            'nav': 'Home',
            'link': '#home'
        },
        {
            'nav': 'About',
            'link': '#about'
        },
        {
            'nav': 'Product',
            'link': '#product'
        },
        {
            'nav': 'Contact',
            'link': '#contact'
        }
    ]
    const listItems = data.map((element) => {
        return (
            <ul style = {{listStyle: 'none'}}>
                <li><a href={element.link} className='list'>{element.nav}</a></li>
            </ul>
        )
    }
    )
    return (
        <div className='navigation'>
            <div className='title'><img className='logo' src={logo} alt="" />
            <h2>Salford & Co.</h2>
            </div>
            <div className='nav-items' style = {{listStyle: 'none'}}>
            {listItems}
            </div>
            
        </div>
    )
}
function App() {
 return (
    <div className='App'>
        <div className='nav-bar'>
            <NavNames />
            <TextDetails />
            <Quote />
            
        </div>
    </div>
 )
}

export default App
