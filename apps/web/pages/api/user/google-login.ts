import type { NextApiRequest, NextApiResponse } from 'next'
import { googleOauthCallback } from '@/lib/api/m3o/services/auth'
import { setLoginCookies } from '@/lib/user'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { authToken } = await googleOauthCallback(req.body)
    await setLoginCookies(req, res, authToken)
    res.json(authToken)
  } catch (e) {
    res.status(500).send({ error: e })
  }
}
