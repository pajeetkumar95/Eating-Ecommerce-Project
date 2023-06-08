import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

    const [input , setInput] = useState('')
    const [searchdata , setSearchData] = useState([]) 
    const [list, setList] = useState([])
    const [secondlist, setSecondlist] = useState([0])

    const navigate = useNavigate()

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((result) => {
                // console.log(result.data.categories)
                setList(result.data.categories)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
            .then((response) => {
                // console.log(response.data.meals)
                setSecondlist(response.data.meals)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((result)=>{
        console.log(result.data)
    })
    .catch((err)=>{
        console.log(err)
    })




    function handlechange(e){
        setInput(e.target.value)
        // console.log(input)
    }

    function handelsubmit(e){
        e.preventDefault()
    }

    function handleclick(e) {
        e.preventDefault()
        navigate("/product")
    }

    function handlesecond(e) {
        e.preventDefault()
        navigate('/product')
    }

    return (

        <div className='first'>
            <div className='resimage'>
                <h1>Search any item</h1>
                <form onSubmit={handelsubmit}>
                    <input type='text' placeholder='Enter Name' value={input} onChange={handlechange}/>
                    <button type='submit'>Search</button>
                </form>
            </div>
            <h1>Our Category</h1>
            <div className='category'>
                {
                    list.map((item, index) => {
                        return (
                            <div key={index} className='thumbnail'>
                                <h2>{item.strCategory}</h2>
                                <img src={item.strCategoryThumb}></img>
                                <Link to={"/product"} onClick={handleclick}>Details</Link>
                            </div>
                        )
                    })
                }
            </div>
            <div className='secondlist'>
                {
                    secondlist.map((element, index) => {
                        return (
                            <div key={index} className='secondresponse' >
                                <h2>{element.strMeal}</h2>
                                <img src={element.strMealThumb}></img>
                                <div className='secondanchor'>
                                    <Link to={"/product"} onClick={handlesecond}>Details</Link>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home