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

export async function login({ email, password, role }) {
    let { token } = await sendJson("/auth/login", { email, password, role });
    return { token }
}

export async function register({ email, password, role, ...data }) {
    let { token } = await sendJson("/auth/register", { email, password, role, ...data });
    return { token }
}

export async function promoteUser({ email, role }, adminAuthToken) {
    let { message } = await sendJson(
        "/auth/promote",
        { email, role },
        { authorization: 'Token: ' + adminAuthToken }
    );
    return { message }
}

export function addClass(data, authToken) {
    return sendJson("/class/add", data, { authorization: 'Token: ' + authToken });
}

export async function availableSeats() {
    let res = await fetch(ENDPOINT.location + '/class/available/seats');
    return res.json()
}