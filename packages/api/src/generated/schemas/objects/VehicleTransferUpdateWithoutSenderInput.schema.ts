import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { TransferStatusSchema } from "../enums/TransferStatus.schema"
import { EnumTransferStatusFieldUpdateOperationsInputObjectSchema } from "./EnumTransferStatusFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { VehicleUpdateOneWithoutTransfersNestedInputObjectSchema } from "./VehicleUpdateOneWithoutTransfersNestedInput.schema"
import { UserUpdateOneWithoutTransfersReceivedNestedInputObjectSchema } from "./UserUpdateOneWithoutTransfersReceivedNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferUpdateWithoutSenderInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    status: z
      .union([z.lazy(() => TransferStatusSchema), z.lazy(() => EnumTransferStatusFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    transferDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    responseDate: z
      .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    reason: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    vehicle: z.lazy(() => VehicleUpdateOneWithoutTransfersNestedInputObjectSchema).optional(),
    recipient: z.lazy(() => UserUpdateOneWithoutTransfersReceivedNestedInputObjectSchema).optional(),
  })
  .strict()

export const VehicleTransferUpdateWithoutSenderInputObjectSchema = Schema
