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