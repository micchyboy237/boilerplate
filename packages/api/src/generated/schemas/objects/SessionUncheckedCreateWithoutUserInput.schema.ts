import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    token: z.string(),
    createdAt: z.coerce.date().optional(),
    expiresAt: z.coerce.date(),
  })
  .strict()

export const SessionUncheckedCreateWithoutUserInputObjectSchema = Schema
