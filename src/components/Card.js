import React from 'react'

export const Card = (props) => {
  const { name, status, battery } = props.item
  return (
    <div className="p-2 w-40">
      <h1>{name}</h1>
      <div className="">
        <p>Status: {status}</p>
        <p>Battery: {battery}%</p>
      </div>
    </div>
  )
}
