// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import getItems from "../../backend/getItems";

export default (req, res) => {
  const items = getItems();

  res.statusCode = 200;
  res.json({ items });
};
