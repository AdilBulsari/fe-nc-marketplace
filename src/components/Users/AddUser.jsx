import axios from "axios"
import { useState } from "react"

function AddUser() {
    const [form, setForm] = useState({
        username: "",
        avatar_url:""
    })

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post("https://adil-fe-nc-marketplace.herokuapp.com/api/users", form).then(() => {
            console.log("User Added")
        }).catch(err => {
            console.log(err)
        })  
    }
    const handleInputChange = (e) => {
        const { value, name } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>User Name :</label>
                <input onChange={handleInputChange}
                    name="username"
                    type="text"
                    value={form.username} />

                <label>Image URL :</label>
                <input onChange={handleInputChange}
                    type="text"
                    name="avatar_url"
                    value={form.avatar_url} />
                <button type="submit">
                    Add user
                </button>
            </form>
        </div>
    )
}

export default AddUser