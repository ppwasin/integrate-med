import type { NextApiRequest, NextApiResponse } from "next"

type ResponseData = {
  message: string
}
export async function GET(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  console.log(`${JSON.stringify(req)} ||| ${JSON.stringify(res)}`)
  return Response.json({ status: "ok" })
  // return res.status(200).json({ message: 'Hello from Next.js!' })
}
