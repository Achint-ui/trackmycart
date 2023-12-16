import React, { useState } from 'react'
import './Home.css'
import axios from "axios"
import { useAuth0 } from '@auth0/auth0-react'
import logo from '../Assets/trackmycart-logo.jpg'

export const Home = () => {
    const { isAuthenticated } = useAuth0()

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("")
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [description, setDescription] = useState("");
    const [description_long, setDescLong] = useState("");

    console.log(name, category, latitude, longitude, description, description_long)

    const submit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("name", name)
        formData.append("category", category)
        formData.append("image", image)
        formData.append("lat", latitude)
        formData.append("lon", longitude)
        formData.append("description", description)
        formData.append("description_long", description_long)

        axios.post("http://localhost:8000/", formData)
            .then(result => console.log(result))
            .catch((err) => console.log(err))

    }

    return (
        <div className='home'>
            {isAuthenticated ? <div className='input-container'>
                <form action="POST" className='input-form'>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id='name' onChange={(e) => setName(e.target.value)} />

                    <p>Do you sell fruits or vegetables or both??</p>
                    <div className="home-radio">
                        <input type="radio" id='category-fruits' name="cat" value="fruits" onChange={(e) => setCategory(e.target.value)} />
                        <label htmlFor="category-fruits">Fruits</label>
                        <input type="radio" id='category-vegetables' name="cat" value="vegetables" onChange={(e) => setCategory(e.target.value)} />
                        <label htmlFor="category-vegetables">Vegetables</label>
                        <input type="radio" id='category-both' name="cat" value="both" onChange={(e) => setCategory(e.target.value)} />
                        <label htmlFor="category-both">Both</label>
                    </div>


                    <label htmlFor="photo">Upload your photo</label>
                    <input type="file" id='photo' onChange={e => setImage(e.target.files[0])} />

                    <label htmlFor="latitude">Latitude?</label>
                    <input type="text" id='latitude' onChange={(e) => setLatitude(e.target.value)} />

                    <label htmlFor="longitude">Longitude?</label>
                    <input type="text" id='longitude' onChange={(e) => setLongitude(e.target.value)} />

                    <label htmlFor="description">What do you sell?</label>
                    <textarea name="" id="description" cols="30" rows="5" onChange={(e) => setDescription(e.target.value)}></textarea>

                    <label htmlFor="description-long">Write about yourself</label>
                    <textarea name="" id="description-long" cols="30" rows="10" onChange={(e) => setDescLong(e.target.value)}></textarea>

                    <input type="submit" value="SUBMIT" className='submit-btn' onClick={submit} />
                </form>

            </div>
                :
                <div className="input-non">
                    <div className="hero-left-text">
                        <h1>Hello Vendor!!</h1>
                        <p>This is the place made for you.</p>
                        <p>Please Login/SignUp to continue!</p>
                    </div>
                    <img src={logo} alt="" className='input-logo' />

                </div>
            }


        </div>
    )
}