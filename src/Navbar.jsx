export default function Navbar(){

    const NavbarItems = ['Home', 'About', 'Product', 'Contact']

    const ItemList = []

    for(let i of NavbarItems){
        ItemList.push(<div className="items">{i}</div>)
    }
    return  (
    <div>
        <div className="nav">
            <img src={logo} />
            <div>
            {ItemList}
            {NavbarItems.map(n => (
                <div key={n} className="nav-items">{n}</div>
            ))}
            </div>
        </div>
    
        
    </div>
    )
}