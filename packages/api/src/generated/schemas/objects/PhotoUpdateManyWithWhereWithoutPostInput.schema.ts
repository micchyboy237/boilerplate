import { z } from "zod"
import { PhotoScalarWhereInputObjectSchema } from "./PhotoScalarWhereInput.schema"
import { PhotoUpdateManyMutationInputObjectSchema } from "./PhotoUpdateManyMutationInput.schema"
import { PhotoUncheckedUpdateManyWithoutPhotosInputObjectSchema } from "./PhotoUncheckedUpdateManyWithoutPhotosInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoUpdateManyWithWhereWithoutPostInput> = z
  .object({
    where: z.lazy(() => PhotoScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => PhotoUpdateManyMutationInputObjectSchema),
      z.lazy(() => PhotoUncheckedUpdateManyWithoutPhotosInputObjectSchema),
    ]),
  })
  .strict()

export const PhotoUpdateManyWithWhereWithoutPostInputObjectSchema = Schema
