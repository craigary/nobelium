import { Config, clientConfig } from '@/lib/server/config'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler (req: NextApiRequest, res: NextApiResponse<Config>) {
  if (req.method === 'GET') {
    res.status(200).json(clientConfig)
  } else {
    res.status(204).end()
  }
}
