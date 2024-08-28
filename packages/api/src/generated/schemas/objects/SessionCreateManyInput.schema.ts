import { z } from "zod"
import { AuthProviderSchema } from "../enums/AuthProvider.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionCreateManyInput> = z
  .object({
    id: z.string().optional(),
    token: z.string(),
    expiresAt: z.coerce.date(),
    provider: z.lazy(() => AuthProviderSchema),
    deviceFingerprint: z.string(),
    userId: z.string(),
  })
  .strict()

export const SessionCreateManyInputObjectSchema = Schema
