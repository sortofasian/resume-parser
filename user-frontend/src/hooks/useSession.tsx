const useSession = () => {
    return async () => {
        const url = (process.env.REACT_APP_API_URL as string) + '/users/checksession'
        const options: RequestInit = {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            mode: 'cors',
            credentials: 'include' // Return HTTPOnly cookies
        }

        const raw = await fetch(url, options)

        // Pack response status, headers, and json body into one object
        const response = {
            status: raw.status,
            headers: raw.headers,
            json: await raw.json()
        }

        // If error field is in response, it's an error
        if (response.json.error) {
            throw new Error(response.json.error)
        }

        return response.json
    }
}
export default useSession
