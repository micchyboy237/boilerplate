import { z } from "zod"

export const PaymentStatusSchema = z.enum(["PAID", "REFUNDED", "PENDING", "FAILED"])
