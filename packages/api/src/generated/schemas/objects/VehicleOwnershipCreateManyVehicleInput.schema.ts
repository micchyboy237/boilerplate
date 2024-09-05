import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateManyVehicleInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    isCurrentOwner: z.boolean().optional(),
    vehicleDisplayPhotoId: z.string().optional().nullable(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const VehicleOwnershipCreateManyVehicleInputObjectSchema = Schema
