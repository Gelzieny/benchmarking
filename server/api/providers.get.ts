import { listProvedoresController } from '../controller/provedores.controller'

export default defineEventHandler(async () => {
  return await listProvedoresController()
})
