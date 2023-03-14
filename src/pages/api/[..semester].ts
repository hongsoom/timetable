import { NextApiRequest, NextApiResponse } from 'next';
import { getList } from '../../lib/index';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const data = getList();
      res.statusCode = 200;
      res.send(data);
    } catch (err) {
      res.statusCode = 400;
      res.send('failed');
    }
  }
};
