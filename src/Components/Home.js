import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Home() {

    const [list, setList] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((result) => {
                // console.log(result.data.categories)
                setList(result.data.categories)
            })
    }, [])

    function handleclick(e){
        e.preventDefault()
        navigate("/product")
    }


    return (

        <div className='first'>
            <div className='resimage'>
            </div>
            <h1>Our Category</h1>
            <div className='category'>
                {
                    list.map((item, index) => {
                        return (
                            <div key={index} className='thumbnail'>
                                <h2>{item.strCategory}</h2>
                                <img src={item.strCategoryThumb}></img>
                                <Link to={"$/product"} onClick={handleclick}>Details</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home