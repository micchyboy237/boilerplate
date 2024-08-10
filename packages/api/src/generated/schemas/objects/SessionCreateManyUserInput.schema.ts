import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionCreateManyUserInput> = z
  .object({
    id: z.string().optional(),
    token: z.string(),
    createdAt: z.coerce.date().optional(),
    expiresAt: z.coerce.date(),
  })
  .strict()

export const SessionCreateManyUserInputObjectSchema = Schema
