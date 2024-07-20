import { z } from "zod"
import { VehicleDetailsArgsObjectSchema } from "./VehicleDetailsArgs.schema"
import { VehicleOwnershipFindManySchema } from "../findManyVehicleOwnership.schema"
import { DocumentFindManySchema } from "../findManyDocument.schema"
import { VehicleCountOutputTypeArgsObjectSchema } from "./VehicleCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleSelect> = z
  .object({
    id: z.boolean().optional(),
    make: z.boolean().optional(),
    model: z.boolean().optional(),
    registrationNumber: z.boolean().optional(),
    details: z.union([z.boolean(), z.lazy(() => VehicleDetailsArgsObjectSchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    ownershipHistory: z.union([z.boolean(), z.lazy(() => VehicleOwnershipFindManySchema)]).optional(),
    documents: z.union([z.boolean(), z.lazy(() => DocumentFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => VehicleCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const VehicleSelectObjectSchema = Schema
