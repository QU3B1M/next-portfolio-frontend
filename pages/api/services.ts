import { NextApiRequest, NextApiResponse } from "next";
import { services} from "../../data";

// TODO: Add backend calls to get data from the database 
export default (req: NextApiRequest, res:NextApiResponse) => {
  res.status(200).json(services);
}
  