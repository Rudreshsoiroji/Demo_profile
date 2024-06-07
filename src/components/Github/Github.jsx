import React from 'react';
import { useLoaderData } from 'react-router-dom'


function Github() {
    //  const [data, SetData] = useState([])
    
    //  useEffect(() => {
        //     fetch(`https://api.github.com/users/rudreshsoiroji`)
        //         .then((res) => res.json() )
        //         .then((data) => SetData(data) )
        
        //  },[])
        
        const data = useLoaderData()

  return (
    <div className='bg-orange-500 text-black text-3xl text-center py-10'>
        Github name {data.login}
        <img  width={200}  src={data.avatar_url} alt="profile" />
            </div>
  )
}

export default Github

export const gitInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/rudreshsoiroji`)
return  response.json()
}