import { z } from "zod"
import { PaymentIntervalSchema } from "../enums/PaymentInterval.schema"
import { NestedEnumPaymentIntervalFilterObjectSchema } from "./NestedEnumPaymentIntervalFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.EnumPaymentIntervalFilter> = z
  .object({
    equals: z.lazy(() => PaymentIntervalSchema).optional(),
    in: z.union([z.lazy(() => PaymentIntervalSchema).array(), z.lazy(() => PaymentIntervalSchema)]).optional(),
    notIn: z.union([z.lazy(() => PaymentIntervalSchema).array(), z.lazy(() => PaymentIntervalSchema)]).optional(),
    not: z.union([z.lazy(() => PaymentIntervalSchema), z.lazy(() => NestedEnumPaymentIntervalFilterObjectSchema)]).optional(),
  })
  .strict()

export const EnumPaymentIntervalFilterObjectSchema = Schema
