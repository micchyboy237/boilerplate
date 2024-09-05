import { z } from "zod"
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema"
import { EnumAuthProviderWithAggregatesFilterObjectSchema } from "./EnumAuthProviderWithAggregatesFilter.schema"
import { AuthProviderSchema } from "../enums/AuthProvider.schema"
import { DateTimeNullableWithAggregatesFilterObjectSchema } from "./DateTimeNullableWithAggregatesFilter.schema"
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AccountScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => AccountScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AccountScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AccountScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => AccountScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    provider: z
      .union([z.lazy(() => EnumAuthProviderWithAggregatesFilterObjectSchema), z.lazy(() => AuthProviderSchema)])
      .optional(),
    lastLogin: z
      .union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  })
  .strict()

export const AccountScalarWhereWithAggregatesInputObjectSchema = Schema
