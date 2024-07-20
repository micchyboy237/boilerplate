import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AuthUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    password: z.string().optional().nullable(),
    googleId: z.string().optional().nullable(),
    emailVerificationCode: z.string().optional().nullable(),
    emailVerificationExpiry: z.coerce.date().optional().nullable(),
    isEmailVerified: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    userId: z.string(),
  })
  .strict()

export const AuthUncheckedCreateInputObjectSchema = Schema
