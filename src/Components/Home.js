import React, { useState } from 'react'
import axios from 'axios'

function Home() {

    const [list, setList] = useState([])

    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((result) => {
            console.log(result.data.categories)
            setList(result.data.categories)
        })

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
                                {/* <p>{item.strCategoryDescription}</p> */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home