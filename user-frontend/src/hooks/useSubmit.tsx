const useSubmit = <RequestBody, ReturnType>(path: string, setLoading: LoadState[1]) => {
    return async (body: RequestBody) => {
        const url = (process.env.REACT_APP_API_URL as string) + path
        const options: RequestInit = {
            method: 'POST',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            mode: 'cors',
            body: JSON.stringify(body),
            credentials: 'include' // Return HTTPOnly cookies
        }

        try {
            setLoading({ loading: true, error: false }) // Start loading
            const raw = await fetch(url, options)

            // Pack response status, headers, and json body into one object
            const response = {
                status: raw.status,
                headers: raw.headers,
                json: await raw.json()
            }

            // If error field is in response, it's an error
            if (response.json.error) {
                setLoading({ loading: false, error: response.json.error }) // Stop loading
                throw new Error(response.json.error)
            }

            setLoading({ loading: false, error: false }) // Stop loading
            return response.json as ReturnType
        } catch (error) {
            let message = 'Unknown Error'
            if (error instanceof Error) message = error.message

            // Set loading to false if fetch error occurs
            setLoading({ loading: false, error: message as string })
            throw error
        }
    }
}

export default useSubmit
