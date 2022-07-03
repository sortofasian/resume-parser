const baseUrl = process.env.REACT_APP_API_BASE_URL

type Data = {
    data: string
}

export async function Service(data: Data) {
    const result = await fetch(baseUrl + '')
    return result
}
