export async function getData() {
  const res = await fetch("/api/get-data");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return await res.json();
}
