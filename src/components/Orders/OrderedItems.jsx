import axios from "axios"
import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { OrderContext } from "../Context/Orders"
import { UserContext } from "../Context/Users"


function OrderedItems() {
    const { user } = useContext(UserContext)
   const {orderedItems,setOrderedItems} = useContext(OrderContext)

    useEffect(() => {
        axios.get(`https://adil-fe-nc-marketplace.herokuapp.com/api/users/${user.username}/orders`).then(res => {
            setOrderedItems(res.data.items)
        })
    })

    return (
        <div>
            <div className="order-item-nav">
                <h1>Ordered Items for {user.username}</h1>
                <Link to="/api/getLastOrder">Click Here to view your previous order</Link>
            </div>
            <ul>
                {orderedItems.map(item => {
                    return <li key={item.item_id}>
                        <p>Name : {item.item_name}</p>
                        <p>description : {item.description}</p>
                        <img src={item.img_url} alt={item.name_name} />
                    </li>
                })}
            </ul>
        </div >)
}

export default OrderedItems