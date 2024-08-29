import { z } from "zod"
import { PostCategorySchema } from "../enums/PostCategory.schema"
import { PostTypeSchema } from "../enums/PostType.schema"
import { PhotoCreateNestedManyWithoutPostInputObjectSchema } from "./PhotoCreateNestedManyWithoutPostInput.schema"
import { VehicleDocumentCreateNestedManyWithoutPostInputObjectSchema } from "./VehicleDocumentCreateNestedManyWithoutPostInput.schema"
import { UserCreateNestedOneWithoutPostsInputObjectSchema } from "./UserCreateNestedOneWithoutPostsInput.schema"
import { OwnershipCreateNestedOneWithoutPostsInputObjectSchema } from "./OwnershipCreateNestedOneWithoutPostsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostCreateInput> = z
  .object({
    id: z.string().optional(),
    date: z.coerce.date(),
    title: z.string(),
    category: z.lazy(() => PostCategorySchema).optional(),
    description: z.string().optional().nullable(),
    type: z
      .lazy(() => PostTypeSchema)
      .optional()
      .nullable(),
    photos: z.lazy(() => PhotoCreateNestedManyWithoutPostInputObjectSchema).optional(),
    documents: z.lazy(() => VehicleDocumentCreateNestedManyWithoutPostInputObjectSchema).optional(),
    createdBy: z.lazy(() => UserCreateNestedOneWithoutPostsInputObjectSchema).optional(),
    ownership: z.lazy(() => OwnershipCreateNestedOneWithoutPostsInputObjectSchema).optional(),
  })
  .strict()

export const VehiclePostCreateInputObjectSchema = Schema
