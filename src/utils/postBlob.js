async function postBlob(form) {
  const res = await fetch("https://jsonblob.com/api/jsonBlob", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      redirect: "follow",
    },
    body: JSON.stringify(form),
  });
  console.log(res.headers.get("Location"));
  return res.headers.get("Location");
}

export default postBlob;
