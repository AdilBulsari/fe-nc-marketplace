import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddItems() {
    const navigate = useNavigate()
    const [isformSubmitSuccesful, setisFormSubmitSuccesful] = useState(false)
    const [hasFormFailedToSubmit, setHasFormFailedToSubmit] = useState(false)
    const initialValue = {
        item_name: '',
        img_url: '',
        price: '',
        description: '',
        category_name: '',
    }
    const [form, setForm] = useState(initialValue)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios
            .post(
                'https://adil-fe-nc-marketplace.herokuapp.com/api/items',
                form
            )
            .then((res) => {
                setisFormSubmitSuccesful(true)
            })
            .catch((err) => {
                console.log(err)
                if (err.response.status !== '200') {
                    setHasFormFailedToSubmit(true)
                }
            })
    }

    const handleInputChange = (e) => {
        const { value, name } = e.target
        setForm({
            ...form,
            [name]: value,
        })
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Item Name :</label>
                <input
                    onChange={handleInputChange}
                    name="item_name"
                    type="text"
                    value={form.item_name}
                />

                <label>Image URL :</label>
                <input
                    onChange={handleInputChange}
                    type="text"
                    name="img_url"
                    value={form.img_url}
                />

                <label>Price :</label>
                <input
                    onChange={handleInputChange}
                    type="text"
                    name="price"
                    value={form.price}
                />

                <label>Description :</label>
                <input
                    onChange={handleInputChange}
                    type="text"
                    name="description"
                    value={form.description}
                />

                <label>Category Name :</label>
                <input
                    onChange={handleInputChange}
                    type="text"
                    name="category_name"
                    value={form.category_name}
                />

                <button type="submit">Submit </button>
            </form>
            {isformSubmitSuccesful ? (
                navigate('/api/listItems')
            ) : (
                <p>Fill details to post item</p>
            )}
            {hasFormFailedToSubmit ? <p>Something went wrong</p> : ''}
        </div>
    )
}

export default AddItems
