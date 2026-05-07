import { createModeloController } from '../../controller/modelos.controller'

export default defineEventHandler(async (event) => {
  const body = await readBody<{ modelo: string, provedor: number }>(event)
  return await createModeloController(body)
})
