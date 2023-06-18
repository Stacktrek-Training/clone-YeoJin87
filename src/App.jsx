import React from 'react'
//import './App.css'
//import Navbar from "./Navbar"
import "./styles.css"

const logo =  'https://drive.google.com/file/d/1wEb597clpIEt3z4_laIxdn3RZRtORWLM/view?usp=sharing'
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
            'nav': 'Services',
            'link': '#services'
        },
        {
            'nav': 'Contact',
            'link': '#contact'
        }
    ]
    const listItems = data.map((element) => {
        return (
            <ul style = {{listStyle: 'none'}}>
                <li><a href={element.link}>{element.nav}</a></li>
            </ul>
        )
    }
    )
    return (
        <div className='navigation'>
            {listItems}
        </div>
    )
}
function App() {
 return (
    <div className='App'>
        <div className='nav-bar'>
            
           <h2>Salford & Co.</h2>
            <NavNames />
        </div>
    </div>
 )
}

export default App
