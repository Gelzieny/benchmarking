import { createError } from 'h3'

import { getPrisma } from '../dependencies/prisma.dependency'
import { createModeloSchema, idModeloSchema, type CreateModeloInput, type IdModeloInput } from '../models/modelo.model'
import { createModelo, deleteModeloById, recreateModelo } from '../repository/modelos.repository'
import { processarModelo } from '../utils/avaliacao'
import { asyncEnvelope } from '../../shared/utils/async'

export async function createModeloController(body: CreateModeloInput) {
  const parsedBody = createModeloSchema.parse(body)
  const prisma = getPrisma()

  const { data: modelo } = await asyncEnvelope(() => createModelo(prisma, {
    modelo: parsedBody.modelo,
    provedorId: parsedBody.provedor,
  }))

  if (!modelo) {
    return null
  }

  processarModelo([modelo.id])

  return modelo
}

export async function refreshModeloController(body: IdModeloInput) {
  const parsedBody = idModeloSchema.parse(body)
  const prisma = getPrisma()

  const { data: modelo } = await asyncEnvelope(() => deleteModeloById(prisma, parsedBody.id))

  if (!modelo) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Modelo não encontrado',
    })
  }

  const { data: newModelo } = await asyncEnvelope(() => recreateModelo(prisma, {
    nome: modelo.nome,
    provedorId: modelo.provedorId,
  }))

  if (!newModelo) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Erro ao recriar modelo',
    })
  }

  processarModelo([newModelo.id])

  return newModelo
}

export async function deleteModeloController(body: IdModeloInput) {
  const parsedBody = idModeloSchema.parse(body)
  const prisma = getPrisma()

  const { data: modelo } = await asyncEnvelope(() => deleteModeloById(prisma, parsedBody.id))

  if (!modelo) {
    return null
  }

  return modelo
}
