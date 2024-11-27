// pages/api/[...path].js
export default async function handler(req, res) {
  const siteId = req.headers["x-site-id"];

  // Handle site-specific API logic based on siteId
  const data = [];

  res.status(200).json(data);
}
