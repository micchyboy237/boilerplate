import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { AccountStatusSchema } from "../enums/AccountStatus.schema"
import { EnumAccountStatusFieldUpdateOperationsInputObjectSchema } from "./EnumAccountStatusFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { SessionUpdateManyWithoutUserNestedInputObjectSchema } from "./SessionUpdateManyWithoutUserNestedInput.schema"
import { VehiclePostUpdateManyWithoutCreatedByNestedInputObjectSchema } from "./VehiclePostUpdateManyWithoutCreatedByNestedInput.schema"
import { VehicleTransferUpdateManyWithoutRecipientNestedInputObjectSchema } from "./VehicleTransferUpdateManyWithoutRecipientNestedInput.schema"
import { VehicleTransferUpdateManyWithoutSenderNestedInputObjectSchema } from "./VehicleTransferUpdateManyWithoutSenderNestedInput.schema"
import { SubscriptionUpdateOneWithoutUserNestedInputObjectSchema } from "./SubscriptionUpdateOneWithoutUserNestedInput.schema"
import { VehicleOwnershipUpdateManyWithoutUserNestedInputObjectSchema } from "./VehicleOwnershipUpdateManyWithoutUserNestedInput.schema"
import { AccountUpdateManyWithoutUserNestedInputObjectSchema } from "./AccountUpdateManyWithoutUserNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpdateWithoutVehiclesInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    firebaseUid: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    isEmailVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
    firstName: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    lastName: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    displayPicture: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    location: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    accountStatus: z
      .union([z.lazy(() => AccountStatusSchema), z.lazy(() => EnumAccountStatusFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    posts: z.lazy(() => VehiclePostUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
    transfersReceived: z.lazy(() => VehicleTransferUpdateManyWithoutRecipientNestedInputObjectSchema).optional(),
    transfersSent: z.lazy(() => VehicleTransferUpdateManyWithoutSenderNestedInputObjectSchema).optional(),
    subscription: z.lazy(() => SubscriptionUpdateOneWithoutUserNestedInputObjectSchema).optional(),
    vehicleOwnerships: z.lazy(() => VehicleOwnershipUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  })
  .strict()

export const UserUpdateWithoutVehiclesInputObjectSchema = Schema
