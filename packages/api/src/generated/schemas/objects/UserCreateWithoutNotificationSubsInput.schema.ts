import { z } from "zod"
import { UserRoleSchema } from "../enums/UserRole.schema"
import { AuthCreateNestedOneWithoutUserInputObjectSchema } from "./AuthCreateNestedOneWithoutUserInput.schema"
import { SessionCreateNestedOneWithoutUserInputObjectSchema } from "./SessionCreateNestedOneWithoutUserInput.schema"
import { UserSubscriptionCreateNestedOneWithoutUserInputObjectSchema } from "./UserSubscriptionCreateNestedOneWithoutUserInput.schema"
import { VehicleOwnershipCreateNestedManyWithoutUserInputObjectSchema } from "./VehicleOwnershipCreateNestedManyWithoutUserInput.schema"
import { DocumentCreateNestedManyWithoutCreatedByInputObjectSchema } from "./DocumentCreateNestedManyWithoutCreatedByInput.schema"
import { NotificationCreateNestedManyWithoutUserInputObjectSchema } from "./NotificationCreateNestedManyWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateWithoutNotificationSubsInput> = z
  .object({
    id: z.string().optional(),
    role: z.lazy(() => UserRoleSchema).optional(),
    firstName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    email: z.string(),
    profilePicture: z.string().optional().nullable(),
    location: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    auth: z.lazy(() => AuthCreateNestedOneWithoutUserInputObjectSchema).optional(),
    session: z.lazy(() => SessionCreateNestedOneWithoutUserInputObjectSchema).optional(),
    subscription: z.lazy(() => UserSubscriptionCreateNestedOneWithoutUserInputObjectSchema).optional(),
    vehicles: z.lazy(() => VehicleOwnershipCreateNestedManyWithoutUserInputObjectSchema).optional(),
    documents: z.lazy(() => DocumentCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
    notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateWithoutNotificationSubsInputObjectSchema = Schema
