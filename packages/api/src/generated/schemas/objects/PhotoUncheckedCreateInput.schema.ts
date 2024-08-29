import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    url: z.string(),
    thumbnailUrl: z.string(),
    postId: z.string().optional().nullable(),
    ownershipId: z.string().optional().nullable(),
  })
  .strict()

export const PhotoUncheckedCreateInputObjectSchema = Schema
