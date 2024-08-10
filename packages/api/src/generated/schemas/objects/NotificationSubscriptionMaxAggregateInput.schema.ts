import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NotificationSubscriptionMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    category: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict()

export const NotificationSubscriptionMaxAggregateInputObjectSchema = Schema
