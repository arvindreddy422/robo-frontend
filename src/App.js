import { useEffect, useState } from 'react'
import './App.css'
import { Card } from './components/Card'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  const [load, setLoad] = useState(true)

  function getData() {
    axios.get('https://robo-info.onrender.com/').then((res) => {
      setLoad(false)
      setData(res.data.items)

      console.log(res, data)
    })
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="text-base font-bold p-3">
      <h1 className="text-center">Details of ROBOTS</h1>
      <button
        className="bg-lime-600 p-2"
        onClick={() => {
          setLoad(true)
          getData()
        }}
      >
        Update Details
      </button>
      {load ? (
        <p>Loading</p>
      ) : (
        <div className="flex flex-wrap">
          {data?.map((item, idx) => (
            <Card key={idx} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
