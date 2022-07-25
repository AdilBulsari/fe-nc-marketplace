import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/Users'

function Home() {
    const navigate = useNavigate()
    const { user } = useContext(UserContext)
    return (
        <div>
            <h1>Home Page</h1>
            <h3>Welcome {user.username}</h3>
            <img src={user.avatar_url} alt={user.username} />
            <br />
            <button onClick={() => navigate('/api/userinfo')}>
                More Details
            </button>
        </div>
    )
}

export default Home
