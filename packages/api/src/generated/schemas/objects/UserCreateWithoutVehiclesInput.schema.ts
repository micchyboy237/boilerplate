import { z } from "zod"
import { AccountStatusSchema } from "../enums/AccountStatus.schema"
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from "./SessionCreateNestedManyWithoutUserInput.schema"
import { VehiclePostCreateNestedManyWithoutCreatedByInputObjectSchema } from "./VehiclePostCreateNestedManyWithoutCreatedByInput.schema"
import { VehicleTransferCreateNestedManyWithoutRecipientInputObjectSchema } from "./VehicleTransferCreateNestedManyWithoutRecipientInput.schema"
import { VehicleTransferCreateNestedManyWithoutSenderInputObjectSchema } from "./VehicleTransferCreateNestedManyWithoutSenderInput.schema"
import { SubscriptionCreateNestedOneWithoutUserInputObjectSchema } from "./SubscriptionCreateNestedOneWithoutUserInput.schema"
import { OwnershipCreateNestedManyWithoutUserInputObjectSchema } from "./OwnershipCreateNestedManyWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateWithoutVehiclesInput> = z
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
    posts: z.lazy(() => VehiclePostCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
    transfersReceived: z.lazy(() => VehicleTransferCreateNestedManyWithoutRecipientInputObjectSchema).optional(),
    transfersSent: z.lazy(() => VehicleTransferCreateNestedManyWithoutSenderInputObjectSchema).optional(),
    subscription: z.lazy(() => SubscriptionCreateNestedOneWithoutUserInputObjectSchema).optional(),
    ownerships: z.lazy(() => OwnershipCreateNestedManyWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateWithoutVehiclesInputObjectSchema = Schema
