import { useEffect, useState } from "react"
import axios from "axios"
import axiosInstance from "../service"


export default function useFetch(url: string){

    const [data, setData] = useState<any>()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        (
            async function (){
                try{
                    setLoading(true)
                    const response = await axiosInstance.get(url)
                    setData(response.data)
                }catch(err: any){
                    setError(err)
                }finally{
                    setLoading(false)
                }
            }
        )()
    },[])

    return { data, error, loading }

}