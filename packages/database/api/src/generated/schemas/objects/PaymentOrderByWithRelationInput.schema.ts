import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SubscriptionOrderByWithRelationInputObjectSchema } from "./SubscriptionOrderByWithRelationInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    currency: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    transactionDate: z.lazy(() => SortOrderSchema).optional(),
    subscriptionId: z.lazy(() => SortOrderSchema).optional(),
    subscription: z.lazy(() => SubscriptionOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict()

export const PaymentOrderByWithRelationInputObjectSchema = Schema
