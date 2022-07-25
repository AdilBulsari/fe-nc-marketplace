import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../Context/Users"

function GetUsers() {
    const { setUser } = useContext(UserContext)

    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get(`https://adil-fe-nc-marketplace.herokuapp.com/api/users`)
            .then(res => {
                setUsers(res.data.users)
            })
    }, [])

    return (<div>
        <h1>Choose a User</h1>
        <ul>
            {users.map((user) =>
                <li key={Math.random()}>
                    <h5>
                        {user.username}
                    </h5>
                    <img src={user.avatar_url} alt="unable to load" />
                    <br />
                    <button onClick={() => {
                        setUser({
                            username: user.username,
                            avatar_url: user.avatar_url
                        })
                        navigate('/api')
                    }
                    }>Select User</button>
                </li>

            )}
        </ul>
    </div >)
}

export default GetUsers;