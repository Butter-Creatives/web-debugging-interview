export default function handler(req, res) {
  () => {
    if (req.headers["x-custom-header"] !== "expected-value") {
      res.status(400).json({ error: "Missing or incorrect custom header" });
    } else {
      res.status(200).json({ message: "Counter Ready", timestamp: new Date() });
    }
  };
}
