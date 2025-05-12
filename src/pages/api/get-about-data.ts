export default function handler(req, res) {
  // This data takes 3 seconds to load
  // Simulate a long response time
  setTimeout(() => {
    res
      .status(200)
      .json({ message: "We help you count!", timestamp: new Date() });
  }, 3_000);
}
