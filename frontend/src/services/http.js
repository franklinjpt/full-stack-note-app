const URL_BASE = "http://localhost:8080";

const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

function handleResponse(response) {
  if (response.ok) {
    // console.log("response", response);
    return response.json();
  }
  throw new HttpError(response);
}

export async function getNotes() {
  const response = await fetch(`${URL_BASE}/notes`, {
    headers: defaultHeaders,
  });
  return handleResponse(response);
}

export async function getArchivedNotes() {
  const response = await fetch(`${URL_BASE}/notes/archived`, {
    headers: defaultHeaders,
  });
  return handleResponse(response);
}

export async function getActiveNotes() {
  const response = await fetch(`${URL_BASE}/notes/active`, {
    headers: defaultHeaders,
  });
  return handleResponse(response);
}

export async function createNote(note) {
  const response = await fetch(`${URL_BASE}/notes`, {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify(note),
  });
  return handleResponse(response);
}

export async function updateNote(note) {
  const response = await fetch(`${URL_BASE}/notes`, {
    method: "PUT",
    headers: defaultHeaders,
    body: JSON.stringify(note),
  });
  return handleResponse(response);
}

export async function deleteNote(id) {
  const response = await fetch(`${URL_BASE}/notes/${id}`, {
    method: "DELETE",
    headers: defaultHeaders,
  });
}

export async function archivedNote(id) {
  const response = await fetch(`${URL_BASE}/notes/archived/${id}`, {
    method: "PATCH",
    headers: defaultHeaders,
  });
}

export async function activeNote(id) {
  const response = await fetch(`${URL_BASE}/notes/active/${id}`, {
    method: "PATCH",
    headers: defaultHeaders,
  });
}
