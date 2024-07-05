
import { useLoaderData } from 'react-router-dom'
function Github() {

  const data = useLoaderData();


  //   useEffect(()=> {
  //  fetch("https://api.github.com/users/bhojrajstha")
  //  .then((response)=> response.json())
  //  .then((data)=>setData(data.followers))

  //   },[])
    
  return (
    <div className='bg-gray-600 text-3xl text-center  pt-5 ' >
     Followers: {data.followers}
      <img src={data.avatar_url} alt='github pic' width={100} height={100}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary")
const data = await response.json()
return data
}