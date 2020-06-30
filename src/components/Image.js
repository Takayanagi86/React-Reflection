import React, {useState, useEffect} from 'react'
import axios from 'axios'


function Image() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [image, setImage] = useState({})
   
    useEffect(() => {
        axios.get('https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes')
        .then(response => {
            setLoading(false)
            setImage(response.data)
            setError('')
        })
        .catch(error => {
           setLoading(false)
           setImage({})
           setError('Something went wrong!')
        })
    }, [])

    return (
        <div>
            <div className="image-container">
                <img className="image" src={image} alt='cat'></img> 
            </div>
            <div className="line-container">
                <div className="line left-line"></div>
                <div className="line right-line"></div>
            </div>
            <div className="content-container">
                <div className="content">
                    Thank you for using the Random Shibe API <br></br> If you would like to view another Shibe then please refresh the page
                </div>
            </div>
        </div>
    )
}

export default Image
