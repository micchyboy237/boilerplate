import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    email: z.literal(true).optional(),
    firebaseUid: z.literal(true).optional(),
    isEmailVerified: z.literal(true).optional(),
    firstName: z.literal(true).optional(),
    lastName: z.literal(true).optional(),
    displayPicture: z.literal(true).optional(),
    location: z.literal(true).optional(),
    accountStatus: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const UserCountAggregateInputObjectSchema = Schema
