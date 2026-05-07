import type { PrismaClient } from '@prisma/client'

export function listProvedores(prisma: PrismaClient) {
  return prisma.provedores.findMany({
    select: {
      nome: true,
      id: true,
    },
  })
}
