import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUncheckedUpdateManyWithoutVehiclesInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    make: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    model: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    registrationNumber: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  })
  .strict()

export const VehicleUncheckedUpdateManyWithoutVehiclesInputObjectSchema = Schema
