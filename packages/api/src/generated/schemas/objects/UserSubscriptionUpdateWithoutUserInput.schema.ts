import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { SubscriptionStatusSchema } from "../enums/SubscriptionStatus.schema"
import { EnumSubscriptionStatusFieldUpdateOperationsInputObjectSchema } from "./EnumSubscriptionStatusFieldUpdateOperationsInput.schema"
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { SubscriptionUpdateOneRequiredWithoutUserSubscriptionsNestedInputObjectSchema } from "./SubscriptionUpdateOneRequiredWithoutUserSubscriptionsNestedInput.schema"
import { PaymentUpdateManyWithoutUserSubscriptionNestedInputObjectSchema } from "./PaymentUpdateManyWithoutUserSubscriptionNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionUpdateWithoutUserInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    status: z
      .union([z.lazy(() => SubscriptionStatusSchema), z.lazy(() => EnumSubscriptionStatusFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    trialStartDate: z
      .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    trialEndDate: z
      .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    startDate: z
      .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    endDate: z
      .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    stripeSubscriptionId: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    iapSubscriptionId: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    subscription: z.lazy(() => SubscriptionUpdateOneRequiredWithoutUserSubscriptionsNestedInputObjectSchema).optional(),
    payments: z.lazy(() => PaymentUpdateManyWithoutUserSubscriptionNestedInputObjectSchema).optional(),
  })
  .strict()

export const UserSubscriptionUpdateWithoutUserInputObjectSchema = Schema
