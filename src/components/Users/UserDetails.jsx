import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Context/Users'

function UserDetails() {
    const { user } = useContext(UserContext)
    const [userDetails, setUserDetails] = useState({
        username: '',
        items_in_basket: '',
        items_ordered: '',
        avatar_url: '',
    })
    useEffect(() => {
        axios
            .get(
                `https://adil-fe-nc-marketplace.herokuapp.com/api/users/${user.username}`
            )
            .then((res) => {
                setUserDetails(res.data.user)
            })
    }, [setUserDetails, user.username])
    return (
        <div>
            <h1>Here is all the information {userDetails.username}</h1>
            <img src={userDetails.avatar_url} alt={userDetails.username} />
            <p>All items in basket :{userDetails.items_in_basket}</p>
            <p>Total Items Ordered : {userDetails.items_ordered}</p>
        </div>
    )
}

export default UserDetails
