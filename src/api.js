export const ENDPOINT = {
    location: "http://localhost:5000",
};

async function sendJson(uri, payload, headers = {}) {
    let res = await fetch(ENDPOINT.location + uri, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...headers },
        body: JSON.stringify(payload),
    });
    let data = await res.json();
    if (!res.ok) {
        throw new Error(data?.error);
    }
    return data;
}

export async function login({ email, password }) {
    let { token } = await sendJson("/admin/login", { email, password });
    return { token }
}

export async function register({ email, password, ...data }) {
    let { token } = await sendJson("/admin/register", { email, password, ...data });
    return { token }
}

export async function promoteUser({ email, role }, authToken) {
    let { message } = await sendJson(
        "/admin/promote",
        { email, role },
        { authorization: 'Token: ' + authToken }
    );
    return { message }
}

export function addClass(data) {
    return sendJson("/class/add", data);
}

