import React, { useEffect } from 'react'

const useGetTypes = () => {

  useEffect(() => {
    const data = async () => {
        try {
            const resp = await fetchData()
            HotelsSet(resp)
        } catch (error) {
          
          
        }
    }
    data()
}, [])

  return{}
}

export default useGetTypes