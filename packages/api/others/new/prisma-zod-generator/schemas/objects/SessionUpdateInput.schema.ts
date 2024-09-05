import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { AccountUpdateOneRequiredWithoutSessionsNestedInputObjectSchema } from "./AccountUpdateOneRequiredWithoutSessionsNestedInput.schema"
import { UserUpdateOneWithoutSessionsNestedInputObjectSchema } from "./UserUpdateOneWithoutSessionsNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionUpdateInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    expiresAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    deviceFingerprint: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    account: z.lazy(() => AccountUpdateOneRequiredWithoutSessionsNestedInputObjectSchema).optional(),
    user: z.lazy(() => UserUpdateOneWithoutSessionsNestedInputObjectSchema).optional(),
  })
  .strict()

export const SessionUpdateInputObjectSchema = Schema
