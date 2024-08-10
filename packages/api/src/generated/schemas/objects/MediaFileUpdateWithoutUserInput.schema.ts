import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { MediaFileTypeSchema } from "../enums/MediaFileType.schema"
import { EnumMediaFileTypeFieldUpdateOperationsInputObjectSchema } from "./EnumMediaFileTypeFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { DocumentUpdateOneWithoutFilesNestedInputObjectSchema } from "./DocumentUpdateOneWithoutFilesNestedInput.schema"
import { VehicleOwnershipUpdateOneWithoutDisplayPictureNestedInputObjectSchema } from "./VehicleOwnershipUpdateOneWithoutDisplayPictureNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUpdateWithoutUserInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    type: z
      .union([z.lazy(() => MediaFileTypeSchema), z.lazy(() => EnumMediaFileTypeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    mimeType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    document: z.lazy(() => DocumentUpdateOneWithoutFilesNestedInputObjectSchema).optional(),
    vehicleOwnership: z.lazy(() => VehicleOwnershipUpdateOneWithoutDisplayPictureNestedInputObjectSchema).optional(),
  })
  .strict()

export const MediaFileUpdateWithoutUserInputObjectSchema = Schema
