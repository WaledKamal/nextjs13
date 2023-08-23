
const fetchRequest = async (url, headers, customConfig) => {
    const deafultConfig = {
        cache: 'force-cache', next: { revalidate: 1000 }
    }
    const res = await fetch(url, customConfig || deafultConfig, { headers: headers || null })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}


export { fetchRequest }