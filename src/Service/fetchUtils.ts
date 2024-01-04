export async function fetchClients(url: string) {
    try {
        const resp = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const datas = await resp.json()
        return datas
    } catch (error) {
        throw new Error(`Fetch error: Network failed`)
    }
}


export async function fetchRemove(url: string) {
    try {
        const resp = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const datas = await resp.json()
        return datas
    } catch (error) {
        throw new Error(`Fetch error: Network failed`)
    }
}
