import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoUncheckedCreateWithoutPostInput> = z
  .object({
    id: z.string().optional(),
    url: z.string(),
    thumbnailUrl: z.string(),
    ownershipId: z.string().optional().nullable(),
  })
  .strict()

export const PhotoUncheckedCreateWithoutPostInputObjectSchema = Schema
