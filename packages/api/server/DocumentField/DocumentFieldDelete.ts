import type { Prisma } from "../../../database/node_modules/@prisma/client"
import type { PrismaClient } from "../../../database/node_modules/@prisma/client"

import { Request, Response, NextFunction } from "express"
import { RequestHandler, ParamsDictionary } from "express-serve-static-core"
import { ZodTypeAny } from "zod"

interface DeleteRequest extends Request {
  prisma: PrismaClient
  body: Prisma.DocumentFieldDeleteArgs
  outputValidation?: ZodTypeAny
  locals?: {
    outputValidator?: ZodTypeAny
  }
}

export type DeleteMiddleware = RequestHandler<ParamsDictionary, any, Prisma.DocumentFieldDeleteArgs, Record<string, any>>

export async function DocumentFieldDelete(req: DeleteRequest, res: Response, next: NextFunction) {
  try {
    const outputValidator = req.locals?.outputValidator || req.outputValidation

    const data = await req.prisma.documentField.delete(req.body)

    if (outputValidator) {
      const validationResult = outputValidator.safeParse(data)
      if (validationResult.success) {
        return res.status(200).json(validationResult.data)
      } else {
        return res.status(400).json({ error: "Invalid data format", details: validationResult.error })
      }
    } else {
      return res.status(200).json(data)
    }
  } catch (error: unknown) {
    next(error)
  }
}
