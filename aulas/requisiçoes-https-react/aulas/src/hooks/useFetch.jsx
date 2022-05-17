import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    //refatorando post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url)
                const json = await res.json()

                setData(json)

            } catch (err) {
                console.log(`o erro é ${err}`)
            }
        }
        
        fetchData()
    }, [url, callFetch])


    // post

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
        }

        setMethod(method)
    }


    useEffect(() => {
        const httpRequest = async () => {
            if (method == "POST") {

                let fetchOptions = [url, config]

                const res = await fetch(...fetchOptions)

                const json = await res.json()

                setCallFetch(json)

            }
        }
        httpRequest()

    }, [config, method, url])


    return { data, httpConfig }
}