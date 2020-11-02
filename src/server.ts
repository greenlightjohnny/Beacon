import Koa, { Context } from "koa"
import bodyParser from "koa-bodyparser"
import cors from "koa2-cors"
import logger from "koa-logger"
import healthcheckRoutes from "./routes/healtcheck"
import coderRoutes from "./routes/coder"
//const healthcheckRoutes = require("./routes/healtcheck")
import { config } from "./config"

const app = new Koa()

const PORT = config.port
app.use(bodyParser())
app.use(
  cors({
    origin: "*",
  })
)
app.use(logger())
// const Router = require("@koa/router")
// const router = new Router()

// router.get("/", async (ctx) => {
//   try {
//     ctx.body = {
//       status: "success",
//     }
//   } catch (e) {
//     console.error(e)
//   }
// })

app.use(healthcheckRoutes.routes())
app.use(coderRoutes.routes())

const server = app
  .listen(PORT, async () => {
    console.log(`Server is listening on port: ${PORT}`)
  })
  .on("error", (err) => {
    console.log(err)
  })

export default server
