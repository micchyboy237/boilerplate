import { z } from "zod"
import { PhotoWhereInputObjectSchema } from "./PhotoWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoListRelationFilter> = z
  .object({
    every: z.lazy(() => PhotoWhereInputObjectSchema).optional(),
    some: z.lazy(() => PhotoWhereInputObjectSchema).optional(),
    none: z.lazy(() => PhotoWhereInputObjectSchema).optional(),
  })
  .strict()

export const PhotoListRelationFilterObjectSchema = Schema
