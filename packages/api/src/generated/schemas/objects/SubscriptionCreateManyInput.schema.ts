import { z } from "zod"
import { SubscriptionPlanSchema } from "../enums/SubscriptionPlan.schema"
import { SubscriptionStatusSchema } from "../enums/SubscriptionStatus.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionCreateManyInput> = z
  .object({
    id: z.string().optional(),
    productId: z.string(),
    plan: z
      .lazy(() => SubscriptionPlanSchema)
      .optional()
      .nullable(),
    status: z.lazy(() => SubscriptionStatusSchema).optional(),
    startDate: z.coerce.date().optional().nullable(),
    endDate: z.coerce.date().optional().nullable(),
    expiresAt: z.coerce.date().optional().nullable(),
    userId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const SubscriptionCreateManyInputObjectSchema = Schema
