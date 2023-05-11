// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name?: string;
  id?: number;
  price?: number;
  error?: Object;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json({ name: "nih nama gua" });
  } else if (req.method === "POST") {
    const { name, id, price } = req.body;

    if (!id || !price) {
      res.status(400).json({ error: { message: "error bang" } });
    }

    res.status(200).json({ name: name, id: id, price: price });
  }
}
