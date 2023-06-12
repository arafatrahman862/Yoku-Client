export const ENDPOINT = {
    location: "https://assingment12-server-arafatrahman862.vercel.app",
};

async function sendJson(uri, payload, headers = {}) {
    const res = await fetch(ENDPOINT.location + uri, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...headers },
        body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data?.error);
    }
    return data;
}

export async function login({ email, password, role }) {
    const { token } = await sendJson("/auth/login", { email, password, role });
    return { token }
}

export async function register({ email, password, role, ...data }) {
    const { token } = await sendJson("/auth/register", { email, password, role, ...data });
    return { token }
}

export async function promoteUser({ email, role }, adminAuthToken) {
    const { message } = await sendJson(
        "/auth/promote",
        { email, role },
        { authorization: 'Token: ' + adminAuthToken }
    );
    return { message }
}

export function addClass(data, authToken) {
    return sendJson("/class/add", data, { authorization: 'Token: ' + authToken });
}
export function approveClassRequest({ class_id, status }, adminAuthToken) {
    return sendJson("/class/approve", { class_id, status }, { authorization: 'Token: ' + adminAuthToken });
}

export async function availableSeats() {
    const res = await fetch(ENDPOINT.location + '/class/available/seats');
    return res.json()
}

export async function allClasses() {
    const res = await fetch(ENDPOINT.location + '/class');
    return res.json()
}

export function getClasses({ find, limit, sort, skip }) {
    return sendJson("/class", { find, limit: limit ? limit : 1, sort, skip: skip ? skip : 0 });
}


export function joinClass({ class_id }, userAuthToken) {
    return sendJson("/student/join", { class_id }, { authorization: 'Token: ' + userAuthToken });
}

export function removeClass({ class_id }, userAuthToken) {
    return sendJson("/student/remove/class", { class_id }, { authorization: 'Token: ' + userAuthToken });
}