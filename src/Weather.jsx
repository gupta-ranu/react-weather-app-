// import React, { useState } from 'react'

// const Counter = () => {
//   const [weather,setWeather]=useState("")
//   const [loading,setLoading]=useState(false)
//   const [error,setError]=useState(null)
//   const [check,setCheck]=useState(null)

//   const API_KEY = "3feb743bc8e210b5a23949609a3ba891"

//   const featchweather = async () =>{
//     if(weather.trim()==""){
//       setError("entre a city name")
//       return
//     }
//     setLoading(true)
//     setError(null)
//     try {
//       const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=${API_KEY}&units=metric`)
//       if(!response.ok){
//         throw new Error ("city not found")
//       }
//       const data = await response.json()
//       setCheck(data)
//       setWeather("")
//     } catch (err) {
//       setError(err.message)
//     } finally{
//       setLoading(false)
//     }
//   }
//   return (
//     <section className=' flex justify-center items-center h-screen flex-col bg-gradient-to-r from-orange-500 via-pink-600 to-purple-700'>
//       <div className=' justify-center items-center flex flex-col border border-none py-20 bg-black/40 rounded-2xl px-15'>
//       <div>
//         <h1 className=' text-2xl font-bold text-white'> ⛅ Weather App</h1>
//       </div>

//       <div className=' space-x-3'>
//         <input type="text" value={weather} onChange={(e)=>setWeather(e.target.value)} placeholder='City' className=' mt-3 border focus:ring-2 focus:ring-blue-600 outline-none rounded-lg bg-white w-[200px] py-1 px-2'/>
//         <button onClick={featchweather} className=' bg-red-500 text-white font-bold px-2 py-1 rounded-md'>Search</button>
//       </div>
    
//     <div className=' mt-5'>
//       {loading && <p>Loading</p>}
//       {error && <p className=' bg-black/30 text-white rounded-lg px-2 py-1'>{error}</p>}
//       {check &&(
//         <>
//         <h2 className=' text-white text-2xl font-bold bg-black/20 rounded-lg px-2 mt-2'> {check.name}</h2>
//           <p className=' text-white font-bold text-2xl bg-black/20 px-2 rounded-2xl mt-2'> <h1 className=' text-red-600 font-medium'>Temperature:</h1> { check.main.temp}°C</p>
//           <p className=' flex  text-white font-bold text-2xl bg-black/20 py-1 px-2 rounded-2xl mt-2'> <h1 className=' px-2 text-red-600 font-medium'>Condition :</h1> {check.weather[0].description}</p>
//         </>
//       )}
//     </div>
//     </div>
//     </section>
//   )
// }

// export default Counter