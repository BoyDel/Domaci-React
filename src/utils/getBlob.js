async function getBlob(url) {
  const res = await fetch(
    `http://jsonblob.com/api/jsonBlob/1096764196254924800`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  const data = await res.json();
  console.log(data);
}

export default getBlob;
