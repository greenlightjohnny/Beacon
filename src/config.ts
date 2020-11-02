import { parse } from "path"

import * as Interface from "./types/interfaces"
export const config: Interface.Iconfig = {
  port: process.env.PORT || "7654",
  redis: {
    host: process.env.REDIS__HOST || "127.0.0.1",
    port:
      (process.env.REDIS__PORT && parseInt(process.env.REDIS__HOST)) || 6379,
  },
}
