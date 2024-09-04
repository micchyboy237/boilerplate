import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { UserUpdateOneWithoutVehiclesNestedInputObjectSchema } from "./UserUpdateOneWithoutVehiclesNestedInput.schema"
import { VehicleOwnershipUpdateManyWithoutVehicleNestedInputObjectSchema } from "./VehicleOwnershipUpdateManyWithoutVehicleNestedInput.schema"
import { VehicleTransferUpdateManyWithoutVehicleNestedInputObjectSchema } from "./VehicleTransferUpdateManyWithoutVehicleNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUpdateInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    make: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    model: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    registrationNumber: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    owner: z.lazy(() => UserUpdateOneWithoutVehiclesNestedInputObjectSchema).optional(),
    ownerships: z.lazy(() => VehicleOwnershipUpdateManyWithoutVehicleNestedInputObjectSchema).optional(),
    transfers: z.lazy(() => VehicleTransferUpdateManyWithoutVehicleNestedInputObjectSchema).optional(),
  })
  .strict()

export const VehicleUpdateInputObjectSchema = Schema
