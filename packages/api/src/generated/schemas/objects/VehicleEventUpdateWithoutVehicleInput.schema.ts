import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { EventTypeSchema } from "../enums/EventType.schema"
import { EnumEventTypeFieldUpdateOperationsInputObjectSchema } from "./EnumEventTypeFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from "./NullableFloatFieldUpdateOperationsInput.schema"
import { DocumentUpdateManyWithoutVehicleEventNestedInputObjectSchema } from "./DocumentUpdateManyWithoutVehicleEventNestedInput.schema"
import { UserUpdateOneWithoutEventsNestedInputObjectSchema } from "./UserUpdateOneWithoutEventsNestedInput.schema"
import { VehicleOwnershipUpdateOneWithoutEventsNestedInputObjectSchema } from "./VehicleOwnershipUpdateOneWithoutEventsNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventUpdateWithoutVehicleInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    type: z.union([z.lazy(() => EventTypeSchema), z.lazy(() => EnumEventTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
    header: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    description: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    price: z
      .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    documents: z.lazy(() => DocumentUpdateManyWithoutVehicleEventNestedInputObjectSchema).optional(),
    createdBy: z.lazy(() => UserUpdateOneWithoutEventsNestedInputObjectSchema).optional(),
    vehicleOwnership: z.lazy(() => VehicleOwnershipUpdateOneWithoutEventsNestedInputObjectSchema).optional(),
  })
  .strict()

export const VehicleEventUpdateWithoutVehicleInputObjectSchema = Schema
