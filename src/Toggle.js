import { useState } from "react";


function Toggle() {
    let Countries =[
        {
            Country : "India",
            code : "id",
            State : ["Delhi", "Mumbai" , "Rajasthan"]
        },
        {
            Country : "USA",
            code : "us",
            State : ["California", "Texas" , "Florida"]
        },
        {
            Country : "Sri Lanka",
            code : "sl",
            State : ["Jaffna", "Kilinochchi" , "Mannar"]
        },
        {
            Country : "England",
            code : "El",
            State : ["London", "Manchester" , "birmingham"]
        }
    ]

    let[CountryState , setCountryState] = useState([])
    console.log(CountryState)

    function ShowState(){
        const countryCode= document.getElementById("country").value;
        let NewCode = (Countries.filter((desh) => { return desh.Country === countryCode }))
        setCountryState(NewCode[0].State)
        console.log(CountryState)
    }
  return (
 <>
    <select id="country" onChange={ShowState} >
        <option selected disabled>Select Counrty</option>
        {Countries.map((desh, index) => { return <option key={desh.code}>{desh.Country}</option>})}
    </select>
    <select name="" id="">
    {CountryState.map((desh, index)  => {return <option key ={index}>{desh}</option>})}
    </select>
    
 </>
  )
}


export default Toggle