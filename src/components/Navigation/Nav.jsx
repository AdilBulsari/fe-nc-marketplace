import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="navBar">
            <div className="Links">
                <Link to="/api/adduser">Add Users</Link>
            </div>
            <div className="Links">
                <Link to="/api/getRegisteredUsers">Registered Users</Link>
            </div>
            <div className="Links">
                <Link to="/api/listItems">Items</Link>
            </div>
            <div className="Links">
                <Link to="/api/additems">Add Items</Link>
            </div>
            <div className="Links">
                <Link to="/api/users/orderedItems">Ordered Items</Link>
            </div>
            <div className="basket-link">
                <Link to="/api/viewBasket">Basket</Link>
            </div>
        </nav>
    )
}

export default Nav
