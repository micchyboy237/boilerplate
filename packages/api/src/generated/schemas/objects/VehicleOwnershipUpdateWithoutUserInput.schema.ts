import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema"
import { BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { MediaFileUpdateOneWithoutVehicleOwnershipNestedInputObjectSchema } from "./MediaFileUpdateOneWithoutVehicleOwnershipNestedInput.schema"
import { VehicleUpdateOneRequiredWithoutOwnershipHistoryNestedInputObjectSchema } from "./VehicleUpdateOneRequiredWithoutOwnershipHistoryNestedInput.schema"
import { VehicleEventUpdateManyWithoutVehicleOwnershipNestedInputObjectSchema } from "./VehicleEventUpdateManyWithoutVehicleOwnershipNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpdateWithoutUserInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    description: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
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
    isCurrentOwner: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
    isTemporaryOwner: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
    canEditDocuments: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    displayPicture: z.lazy(() => MediaFileUpdateOneWithoutVehicleOwnershipNestedInputObjectSchema).optional(),
    vehicle: z.lazy(() => VehicleUpdateOneRequiredWithoutOwnershipHistoryNestedInputObjectSchema).optional(),
    events: z.lazy(() => VehicleEventUpdateManyWithoutVehicleOwnershipNestedInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipUpdateWithoutUserInputObjectSchema = Schema
