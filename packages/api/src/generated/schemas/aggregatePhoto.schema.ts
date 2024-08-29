import { z } from "zod"
import { PhotoOrderByWithRelationInputObjectSchema } from "./objects/PhotoOrderByWithRelationInput.schema"
import { PhotoWhereInputObjectSchema } from "./objects/PhotoWhereInput.schema"
import { PhotoWhereUniqueInputObjectSchema } from "./objects/PhotoWhereUniqueInput.schema"
import { PhotoCountAggregateInputObjectSchema } from "./objects/PhotoCountAggregateInput.schema"
import { PhotoMinAggregateInputObjectSchema } from "./objects/PhotoMinAggregateInput.schema"
import { PhotoMaxAggregateInputObjectSchema } from "./objects/PhotoMaxAggregateInput.schema"

export const PhotoAggregateSchema = z.object({
  orderBy: z.union([PhotoOrderByWithRelationInputObjectSchema, PhotoOrderByWithRelationInputObjectSchema.array()]).optional(),
  where: PhotoWhereInputObjectSchema.optional(),
  cursor: PhotoWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), PhotoCountAggregateInputObjectSchema]).optional(),
  _min: PhotoMinAggregateInputObjectSchema.optional(),
  _max: PhotoMaxAggregateInputObjectSchema.optional(),
})
