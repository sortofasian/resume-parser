const useRequest = <ReturnType,>(path: string, setLoading: LoadState[1]) => {
    return async () => {
        const url = (process.env.REACT_APP_API_URL as string) + path
        const options: RequestInit = {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            mode: 'cors',
            credentials: 'include' // Return HTTPOnly cookies
        }

        try {
            setLoading({ loading: true, error: false })
            const raw = await fetch(url, options)

            // Pack response status, headers, and json body into one object
            const response = {
                status: raw.status,
                headers: raw.headers,
                json: await raw.json()
            }

            if (response.status >= 400) {
                setLoading({ loading: false, error: response.json.error })
                throw new Error(response.json)
            }

            if (response.status < 300 || response.status >= 200) {
                setLoading({ loading: false, error: false })
                return response.json as ReturnType
            }
        } catch (err) {
            setLoading({ loading: false, error: err as string })
            throw err
        }
    }
}

export default useRequest
