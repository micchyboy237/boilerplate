import { z } from "zod"

export const UserScalarFieldEnumSchema = z.enum(["id", "email", "password", "firebaseUid", "provider", "accountStatus"])
