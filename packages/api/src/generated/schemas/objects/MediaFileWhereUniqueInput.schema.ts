import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    vehicleOwnershipId: z.string().optional(),
  })
  .strict()

export const MediaFileWhereUniqueInputObjectSchema = Schema
