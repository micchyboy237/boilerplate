import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { AuthProviderSchema } from "../enums/AuthProvider.schema"
import { EnumAuthProviderFieldUpdateOperationsInputObjectSchema } from "./EnumAuthProviderFieldUpdateOperationsInput.schema"
import { BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema"
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { UserUpdateOneRequiredWithoutAccountsNestedInputObjectSchema } from "./UserUpdateOneRequiredWithoutAccountsNestedInput.schema"
import { SessionUpdateManyWithoutAccountNestedInputObjectSchema } from "./SessionUpdateManyWithoutAccountNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AccountUpdateInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    provider: z
      .union([z.lazy(() => AuthProviderSchema), z.lazy(() => EnumAuthProviderFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    firebaseUid: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    isEmailVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
    lastLogin: z
      .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    user: z.lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputObjectSchema).optional(),
    sessions: z.lazy(() => SessionUpdateManyWithoutAccountNestedInputObjectSchema).optional(),
  })
  .strict()

export const AccountUpdateInputObjectSchema = Schema
