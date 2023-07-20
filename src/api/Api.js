async function getTrackAll() {
  return fetch("https://painassasin.online/catalog/track/all/", {
    method: "GET",
  }).then((response) => {
    if (response.status !== 200) throw new Error("Не удалось загрузить плейлист, попробуйте позже");
    return response.json();
  });
}

export default getTrackAll;
