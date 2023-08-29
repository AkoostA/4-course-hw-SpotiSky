export default function getTrackAll() {
  return fetch("https://painassasin.online/catalog/track/all/", {
    method: "GET",
  }).then((response) => {
    if (response.status !== 200)
      throw new Error("Не удалось загрузить плейлист, попробуйте позже");
    return response.json();
  });
}

export function getRegister({ email, username, password }) {
  return fetch("https://painassasin.online/user/signup/", {
    method: "POST",
    body: JSON.stringify({
      email,
      username,
      password,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => {
    if (response.status === 500) throw new Error("Сервер сломался");
    return response.json();
  });
}

export function getLogin({ email, password }) {
  return fetch("https://painassasin.online/user/login/", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => {
    if (response.status === 500) throw new Error("Сервер сломался");
    return response.json();
  });
}

export function getCategory({ id }) {
  return fetch(`https://painassasin.online/catalog/selection/${id}`, {
    method: "GET",
  }).then((response) => {
    if (response.status === 401)
      throw new Error("Не удалось загрузить плейлист, попробуйте позже");
    return response.json();
  });
}

export function getFavoritesTracks(token) {
  return fetch("https://painassasin.online/catalog/track/favorite/all/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if (response.status === 401) throw new Error("Токен протух");
    return response.json();
  });
}

export function getToken({ email, password }) {
  return fetch("https://painassasin.online/user/token/", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());
}

export function refreshToken(token) {
  return fetch("https://painassasin.online/user/token/refresh/", {
    method: "POST",
    body: JSON.stringify({
      refresh: { token },
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());
}

export function addLike({ token, id }) {
  return fetch(`https://painassasin.online/catalog/track/${id}/favorite/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if (response.status === 401) throw new Error("Токен протух");
    return response.json();
  });
}

export function disLike({ token, id }) {
  return fetch(`https://painassasin.online/catalog/track/${id}/favorite/`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if (response.status === 401) throw new Error("Токен протух");
    return response.json();
  });
}
