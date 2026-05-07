import { getPrisma } from '../dependencies/prisma.dependency'
import { listProvedores } from '../repository/provedores.repository'

export async function listProvedoresController() {
  const prisma = getPrisma()
  return await listProvedores(prisma)
}
