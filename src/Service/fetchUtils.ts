export async function fetchStatus(url: string, optionSelected: any) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        await response.json().then((data) => {
            optionSelected(data)
        })
        
    } catch (error) {
        throw new Error(`Fetch error: Network failed`)
    }
}


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