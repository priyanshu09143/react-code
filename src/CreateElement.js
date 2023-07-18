import React, { useState } from 'react'

function CreateElement() {
  let movies = [
    {id:1,name:"KGF"},
    {id:2,name:"RRR"},
    {id:3,name:"Harry poter"},
    {id:4,name:"Mission Impossible"},
    {id:5,name:"Money Heist"},
    {id:6,name:"Stranger Things"},
  ]

  


  return (
   <>
   <ul>
    {movies.map(movie =><li key={movie.id}>{movie.name}</li>)}

   </ul>
   </>
  )
}

export default CreateElement