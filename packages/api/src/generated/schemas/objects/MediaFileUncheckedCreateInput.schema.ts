import { z } from "zod"
import { MediaFileTypeSchema } from "../enums/MediaFileType.schema"
import { VehicleOwnershipUncheckedCreateNestedOneWithoutVehicleDisplayPhotoInputObjectSchema } from "./VehicleOwnershipUncheckedCreateNestedOneWithoutVehicleDisplayPhotoInput.schema"
import { VehicleDocumentUncheckedCreateNestedOneWithoutFileInputObjectSchema } from "./VehicleDocumentUncheckedCreateNestedOneWithoutFileInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    type: z.lazy(() => MediaFileTypeSchema),
    mimeType: z.string(),
    fileName: z.string(),
    url: z.string(),
    thumbnailUrl: z.string(),
    postId: z.string().optional().nullable(),
    ownershipId: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    displayPhotoOwnership: z
      .lazy(() => VehicleOwnershipUncheckedCreateNestedOneWithoutVehicleDisplayPhotoInputObjectSchema)
      .optional(),
    vehicleDocument: z.lazy(() => VehicleDocumentUncheckedCreateNestedOneWithoutFileInputObjectSchema).optional(),
  })
  .strict()

export const MediaFileUncheckedCreateInputObjectSchema = Schema
