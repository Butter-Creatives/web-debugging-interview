export async function getAboutData() {
  const res = await fetch("/api/get-about-data");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return await res.json();
}
