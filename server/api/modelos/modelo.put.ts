import { refreshModeloController } from '../../controller/modelos.controller'

export default defineEventHandler(async (event) => {
    const body = await readBody<{ id: number }>(event)
    return await refreshModeloController(body)
})
