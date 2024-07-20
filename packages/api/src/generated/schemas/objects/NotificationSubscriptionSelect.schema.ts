import { z } from "zod"
import { UserArgsObjectSchema } from "./UserArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NotificationSubscriptionSelect> = z
  .object({
    id: z.boolean().optional(),
    category: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
  })
  .strict()

export const NotificationSubscriptionSelectObjectSchema = Schema
