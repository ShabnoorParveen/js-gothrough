import React, { useEffect } from 'react'

function CountsFc ({ number }) {

    //achiving mounting by jist useffect n consolelog it
    useEffect(() => {
      console.log("Functiona Component: Updating....")
        //unmounting
        return ()=> {
            console.log("Functional conponent Removed.....")//remover button for functional component
        }

    }, [number])//updating by giving dependencies
    

  return (
    <div>
        <h1>{number}</h1>
    </div>
  )
}

export default CountsFc;