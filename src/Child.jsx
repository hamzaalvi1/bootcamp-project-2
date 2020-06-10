import React from "react"

const Child = ({userName})=>{
  console.log(userName)
    return(
        <div>
            <h1>Hey there! I'm {userName.firstName} {userName.lastName} </h1>
            <h2>I'm from Child Component </h2>
            <hr/>


        </div> 

    )

}
export default Child