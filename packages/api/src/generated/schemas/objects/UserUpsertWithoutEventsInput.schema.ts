import { z } from "zod"
import { UserUpdateWithoutEventsInputObjectSchema } from "./UserUpdateWithoutEventsInput.schema"
import { UserUncheckedUpdateWithoutEventsInputObjectSchema } from "./UserUncheckedUpdateWithoutEventsInput.schema"
import { UserCreateWithoutEventsInputObjectSchema } from "./UserCreateWithoutEventsInput.schema"
import { UserUncheckedCreateWithoutEventsInputObjectSchema } from "./UserUncheckedCreateWithoutEventsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpsertWithoutEventsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutEventsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutEventsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutEventsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutEventsInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutEventsInputObjectSchema = Schema
