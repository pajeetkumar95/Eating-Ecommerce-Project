import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Service() {

    const [servicedata , setServicedata] = useState([])

    axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    .then((response)=>{
        // console.log(response.data.meals)
    })

    return (
      <>
      </>
    )

}

export default Service