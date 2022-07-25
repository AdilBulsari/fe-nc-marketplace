import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ViewBasket from './components/Basket/ViewBasket'
import { OrderContext } from './components/Context/Orders'
import { UserContext } from './components/Context/Users'
import Home from './components/Home/Home'
import AddItems from './components/Items/AddItems'
import Items from './components/Items/Items'
import Nav from './components/Navigation/Nav'
import OrderedItems from './components/Orders/OrderedItems'
import ViewLastOrder from './components/Orders/ViewLastOrder'
import usePreviousOrder from './components/Store/OrdersStore'
import AddUser from './components/Users/AddUser'
import GetUsers from './components/Users/GetUsers'
import UserDetails from './components/Users/UserDetails'

function App() {
    const [user, setUser] = useState({
        username: 'Paul-R',
        avatar_url:
            'https://images.prismic.io/northcoders/5ffa1ae0-0e83-47aa-a5f2-d4b6ef24af5a_Paul+R.jpg',
    })

    const { orderedItems, setOrderedItems } = usePreviousOrder()

    return (
        <BrowserRouter>
            <div className="App">
                <h1>NC-Market Place</h1>
                <UserContext.Provider value={{ user, setUser }}>
                    <OrderContext.Provider
                        value={{ orderedItems, setOrderedItems }}
                    >
                        <Nav />
                        <Routes>
                            <Route path="/api" element={<Home />} />
                            <Route
                                path="/api/userinfo"
                                element={<UserDetails />}
                            />
                            <Route path="/api/adduser" element={<AddUser />} />
                            <Route
                                path="/api/getRegisteredUsers"
                                element={<GetUsers />}
                            />
                            <Route path="/api/listItems" element={<Items />} />
                            <Route
                                path="/api/categories/:category_name"
                                element={<Items />}
                            />
                            <Route
                                path="/api/additems"
                                element={<AddItems />}
                            />
                            <Route
                                path="/api/users/orderedItems"
                                element={<OrderedItems />}
                            />
                            <Route
                                path="/api/getLastOrder"
                                element={<ViewLastOrder />}
                            />
                            <Route
                                path="/api/viewBasket"
                                element={<ViewBasket />}
                            />
                        </Routes>
                    </OrderContext.Provider>
                </UserContext.Provider>
            </div>
        </BrowserRouter>
    )
}

export default App
