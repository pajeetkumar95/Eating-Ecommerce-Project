import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Product() {

    const [details, setDetails] = useState([])

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((result) => {
            // console.log(result.data.categories)
            setDetails(result.data.categories)
        })
    }, [])



    return (
        <div className='details'>
            {
                details.map((element, index) => {
                    return (
                        <div key={index} className='description'>
                            <h2>Id : {element.idCategory}</h2>
                            <p>{element.strCategoryDescription}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Product