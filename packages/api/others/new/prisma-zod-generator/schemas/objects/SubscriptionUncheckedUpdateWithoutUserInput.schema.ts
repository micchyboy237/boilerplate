import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { SubscriptionPlanSchema } from "../enums/SubscriptionPlan.schema"
import { NullableEnumSubscriptionPlanFieldUpdateOperationsInputObjectSchema } from "./NullableEnumSubscriptionPlanFieldUpdateOperationsInput.schema"
import { SubscriptionStatusSchema } from "../enums/SubscriptionStatus.schema"
import { EnumSubscriptionStatusFieldUpdateOperationsInputObjectSchema } from "./EnumSubscriptionStatusFieldUpdateOperationsInput.schema"
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { PaymentUncheckedUpdateManyWithoutSubscriptionNestedInputObjectSchema } from "./PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionUncheckedUpdateWithoutUserInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    productId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    plan: z
      .union([
        z.lazy(() => SubscriptionPlanSchema),
        z.lazy(() => NullableEnumSubscriptionPlanFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    status: z
      .union([z.lazy(() => SubscriptionStatusSchema), z.lazy(() => EnumSubscriptionStatusFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    startDate: z
      .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    endDate: z
      .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    expiresAt: z
      .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutSubscriptionNestedInputObjectSchema).optional(),
  })
  .strict()

export const SubscriptionUncheckedUpdateWithoutUserInputObjectSchema = Schema
