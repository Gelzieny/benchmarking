import { z } from 'zod'

export const createModeloSchema = z.object({
  modelo: z.string().min(1),
  provedor: z.number().int().positive(),
})

export const idModeloSchema = z.object({
  id: z.number().int().positive(),
})

export type CreateModeloInput = z.infer<typeof createModeloSchema>
export type IdModeloInput = z.infer<typeof idModeloSchema>
