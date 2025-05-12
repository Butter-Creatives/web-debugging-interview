export async function getData() {
  const res = await fetch("/api/get-data", {
    headers: { "x-custom-header": "expected-value" },
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return await res.json();
}
