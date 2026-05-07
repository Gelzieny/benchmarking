import { usePrisma } from '../utils/db'

export function getPrisma() {
  return usePrisma()
}
