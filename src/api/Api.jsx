export default async function getTrackAll() {
  return fetch("https://painassasin.online/catalog/track/all/", {
    method: "GET",
  }).then((response) => {
    if (response.status !== 200)
      throw new Error("Не удалось загрузить плейлист, попробуйте позже");
    return response.json();
  });
}

export async function getCategory({ id }) {
  return fetch(`https://painassasin.online/catalog/selection/${id}`, {
    method: "GET",
  }).then((response) => {
    if (response.status !== 200)
      throw new Error("Не удалось загрузить плейлист, попробуйте позже");
    return response.json();
  });
}
