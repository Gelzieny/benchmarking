import type { PrismaClient } from '@prisma/client'

type CreateModeloRepositoryInput = {
  modelo: string
  provedorId: number
}

export function createModelo(prisma: PrismaClient, input: CreateModeloRepositoryInput) {
  return prisma.modelos.create({
    data: {
      nome: input.modelo,
      provedor: {
        connect: {
          id: input.provedorId,
        },
      },
    },
  })
}

export function deleteModeloById(prisma: PrismaClient, id: number) {
  return prisma.modelos.delete({
    where: {
      id,
    },
  })
}

export function recreateModelo(prisma: PrismaClient, modelo: { nome: string, provedorId: number }) {
  return prisma.modelos.create({
    data: {
      nome: modelo.nome,
      provedor: {
        connect: {
          id: modelo.provedorId,
        },
      },
    },
  })
}
