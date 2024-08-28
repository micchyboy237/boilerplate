import { z } from "zod"
import { AccountStatusSchema } from "../enums/AccountStatus.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateManyInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    firebaseUid: z.string(),
    isEmailVerified: z.boolean().optional(),
    accountStatus: z.lazy(() => AccountStatusSchema).optional(),
  })
  .strict()

export const UserCreateManyInputObjectSchema = Schema
