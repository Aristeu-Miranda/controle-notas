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

export async function fetchCreate(url: string, data: any) {
    const clientData = { ...data };
    try {
                const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(clientData),
        });
    } catch (error) {
        console.error('Ocorreu um erro ao enviar os dados:', error);
    }
}

export async function fetchUpdate(url: string, data: any) {
    try {
        const resp = await fetch(new URL(url), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...data
            })
        })
        if (!resp.ok) {
            throw new Error(`Erro na requisição: ${resp.status}`);
          }
        const responseData = await resp.json();
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
