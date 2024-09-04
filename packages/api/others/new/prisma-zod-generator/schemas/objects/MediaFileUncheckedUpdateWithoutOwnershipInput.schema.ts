import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { MediaFileTypeSchema } from "../enums/MediaFileType.schema"
import { EnumMediaFileTypeFieldUpdateOperationsInputObjectSchema } from "./EnumMediaFileTypeFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { VehicleOwnershipUncheckedUpdateOneWithoutVehicleDisplayPhotoNestedInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateOneWithoutVehicleDisplayPhotoNestedInput.schema"
import { VehicleDocumentUncheckedUpdateOneWithoutFileNestedInputObjectSchema } from "./VehicleDocumentUncheckedUpdateOneWithoutFileNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUncheckedUpdateWithoutOwnershipInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    type: z
      .union([z.lazy(() => MediaFileTypeSchema), z.lazy(() => EnumMediaFileTypeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    mimeType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    fileName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    thumbnailUrl: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    postId: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    displayPhotoOwnership: z
      .lazy(() => VehicleOwnershipUncheckedUpdateOneWithoutVehicleDisplayPhotoNestedInputObjectSchema)
      .optional(),
    vehicleDocument: z.lazy(() => VehicleDocumentUncheckedUpdateOneWithoutFileNestedInputObjectSchema).optional(),
  })
  .strict()

export const MediaFileUncheckedUpdateWithoutOwnershipInputObjectSchema = Schema
