import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "../Context/Users"

function Items() {
    const { category_name } = useParams()
    const [items, setItems] = useState([])
    const { user } = useContext(UserContext)

    useEffect(() => {
        if (category_name) {
            axios.get(`https://adil-fe-nc-marketplace.herokuapp.com/api/categories`).then(res => {
                const categories = [...res.data.categories]
                const filteredCategory = categories.filter(category =>
                    category.category_name === category_name
                )
                return filteredCategory
            }).then((filteredCategory) => {
                axios.get(`https://adil-fe-nc-marketplace.herokuapp.com/api/items`).then(res => {
                    const allItems = res.data.items
                    setItems(() => {
                        const newItems = [...allItems]
                        const newVar = newItems.filter(item => item.category_name === filteredCategory[0].category_name)
                        return newVar
                    })
                })
            })
        } else {
            axios.get(`https://adil-fe-nc-marketplace.herokuapp.com/api/items`).then(res => {
                setItems(res.data.items)
            })
        }
    }, [category_name])

    function deleteItemHandler(id) {
        axios.delete(`https://adil-fe-nc-marketplace.herokuapp.com/api/items/${id}`).then(() => {
            const itemsAfterDelete = items.filter(items => items.item_id !== id)
            setItems(itemsAfterDelete)
        })
    }

    function orderItemHandler(id) {
        console.log(id)
        const orderedItem = items.filter(item => item.item_id === id)
        console.log(orderedItem)
        axios.post(`https://adil-fe-nc-marketplace.herokuapp.com/api/users/${user.username}/orders`, { item_id: orderedItem[0].item_id }).then(() => {
            console.log('ordered')
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="items-list">
            <h1>
                There are total :{items.length} items .
            </h1>
            <ul>
                {items.map(({
                    item_id, item_name,
                    description, img_url,
                    price, category_name }) =>
                    <li key={item_id}>
                        <h3> {item_name}</h3>
                        <article>
                            Description :{description}
                        </article>
                        <img className="item-img" src={img_url} alt={item_name} />
                        <br />
                        Price: <p>£{price}</p>
                        Item Category : <p>{category_name}</p>
                        <button onClick={() => deleteItemHandler(item_id)}>Delete Item</button>
                        <button onClick={() => orderItemHandler(item_id)}>Order</button>
                    </li>
                )}
            </ul>

        </div >
    )
}

export default Items