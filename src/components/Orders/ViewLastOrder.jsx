import { useContext } from 'react'
import { OrderContext } from '../Context/Orders'

function ViewLastOrder() {
    const { orderedItems } = useContext(OrderContext)
    const lastOrder = orderedItems[orderedItems.length - 1]
    const isOrdersEmpty = orderedItems.length === 0
    return (
        <div>
            <h1>Your last order was : </h1>
            {isOrdersEmpty ? (
                <p>No orders made yet</p>
            ) : (
                <p>{lastOrder.item_name} </p>
            )}

            {isOrdersEmpty ? null : (
                <img src={lastOrder.img_url} alt={lastOrder.item_name} />
            )}
        </div>
    )
}

export default ViewLastOrder
