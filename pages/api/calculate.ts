// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  result?: number;
  message?: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { durationInBed, durationAsleep } = req.query;

  if (isNaN(+durationInBed) || isNaN(+durationAsleep)) {
    res.status(400).json({ message: "Value should be number." });
  } else if (!+durationInBed || !+durationAsleep) {
    res.status(400).json({ message: "Value should be greater than 0." });
  } else {
    res.status(200).json({ result: (100 * +durationAsleep) / +durationInBed });
  }
}
