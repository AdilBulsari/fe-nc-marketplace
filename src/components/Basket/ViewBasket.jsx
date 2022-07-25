import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Context/Users'

function ViewBasket() {
    const { user } = useContext(UserContext)
    const [basket, setBasket] = useState([])

    useEffect(() => {
        axios
            .get(
                `https://adil-fe-nc-marketplace.herokuapp.com/api/users/${user.username}/basket`
            )
            .then((res) => {
                console.log(res.data)
                setBasket(res.data.items)
            })
    }, [user.username])

    return (
        <div>
            <h1>Hey {user.username} here is your basket </h1>
            {basket.map((item) => {
                return (
                    <li key={item.item_id}>
                        <p>Item name : {item.item_name}</p>
                        <p>Category : {item.category_name}</p>
                        <p>description : {item.description}</p>
                        <p>Price : {item.price}</p>
                        <img src={item.img_url} alt={item.item_name} />
                    </li>
                )
            })}
        </div>
    )
}

export default ViewBasket
