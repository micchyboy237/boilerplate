import { z } from "zod"
import { PaymentStatusSchema } from "../enums/PaymentStatus.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentCreateManyInput> = z
  .object({
    id: z.string().optional(),
    price: z.number(),
    currencyCode: z.string(),
    status: z.lazy(() => PaymentStatusSchema),
    transactionId: z.string(),
    transactionDate: z.coerce.date(),
    subscriptionId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const PaymentCreateManyInputObjectSchema = Schema
