import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { BoolFilterObjectSchema } from "./BoolFilter.schema"
import { EnumAccountStatusFilterObjectSchema } from "./EnumAccountStatusFilter.schema"
import { AccountStatusSchema } from "../enums/AccountStatus.schema"
import { ProfileRelationFilterObjectSchema } from "./ProfileRelationFilter.schema"
import { ProfileWhereInputObjectSchema } from "./ProfileWhereInput.schema"
import { SubscriptionRelationFilterObjectSchema } from "./SubscriptionRelationFilter.schema"
import { SubscriptionWhereInputObjectSchema } from "./SubscriptionWhereInput.schema"
import { SessionListRelationFilterObjectSchema } from "./SessionListRelationFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    firebaseUid: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    isEmailVerified: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
    accountStatus: z.union([z.lazy(() => EnumAccountStatusFilterObjectSchema), z.lazy(() => AccountStatusSchema)]).optional(),
    profile: z
      .union([z.lazy(() => ProfileRelationFilterObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema)])
      .optional()
      .nullable(),
    subscription: z
      .union([z.lazy(() => SubscriptionRelationFilterObjectSchema), z.lazy(() => SubscriptionWhereInputObjectSchema)])
      .optional()
      .nullable(),
    sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const UserWhereInputObjectSchema = Schema
