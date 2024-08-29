import { z } from "zod"
import { AccountStatusSchema } from "../enums/AccountStatus.schema"
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from "./SessionCreateNestedManyWithoutUserInput.schema"
import { VehicleCreateNestedManyWithoutOwnerInputObjectSchema } from "./VehicleCreateNestedManyWithoutOwnerInput.schema"
import { VehiclePostCreateNestedManyWithoutCreatedByInputObjectSchema } from "./VehiclePostCreateNestedManyWithoutCreatedByInput.schema"
import { VehicleTransferCreateNestedManyWithoutRecipientInputObjectSchema } from "./VehicleTransferCreateNestedManyWithoutRecipientInput.schema"
import { VehicleTransferCreateNestedManyWithoutSenderInputObjectSchema } from "./VehicleTransferCreateNestedManyWithoutSenderInput.schema"
import { SubscriptionCreateNestedOneWithoutUserInputObjectSchema } from "./SubscriptionCreateNestedOneWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateWithoutOwnershipsInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    firebaseUid: z.string(),
    isEmailVerified: z.boolean().optional(),
    firstName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    displayPicture: z.string().optional().nullable(),
    location: z.string().optional().nullable(),
    accountStatus: z.lazy(() => AccountStatusSchema).optional(),
    sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
    vehicles: z.lazy(() => VehicleCreateNestedManyWithoutOwnerInputObjectSchema).optional(),
    posts: z.lazy(() => VehiclePostCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
    transfersReceived: z.lazy(() => VehicleTransferCreateNestedManyWithoutRecipientInputObjectSchema).optional(),
    transfersSent: z.lazy(() => VehicleTransferCreateNestedManyWithoutSenderInputObjectSchema).optional(),
    subscription: z.lazy(() => SubscriptionCreateNestedOneWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateWithoutOwnershipsInputObjectSchema = Schema
