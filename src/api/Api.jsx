export default function getTrackAll() {
  return fetch("https://painassasin.online/catalog/track/all/", {
    method: "GET",
  }).then((response) => {
    if (response.status !== 200)
      throw new Error("Не удалось загрузить плейлист, попробуйте позже");
    return response.json();
  });
}

function getRegister({ email, username, password }) {
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

function getLogin({ email, password }) {
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

function getCategory({ id }) {
  return fetch(`https://painassasin.online/catalog/selection/${id}`, {
    method: "GET",
  }).then((response) => {
    if (response.status === 401)
      throw new Error("Не удалось загрузить плейлист, попробуйте позже");
    return response.json();
  });
}

function getFavoritesTrack({ token }) {
  return fetch("https://painassasin.online/catalog/track/favorite/all/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if (response.status !== 200)
      throw new Error("Не удалось загрузить плейлист, попробуйте позже");
    return response.json();
  });
}

function getToken({ email, password }) {
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

export { getCategory, getRegister, getLogin, getFavoritesTrack, getToken };
