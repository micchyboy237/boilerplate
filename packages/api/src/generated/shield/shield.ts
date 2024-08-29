import { shield, allow } from "trpc-shield"
import { Context } from "../../trpc"

export const permissions = shield<Context>({
  query: {
    aggregateOwnership: allow,
    aggregatePayment: allow,
    aggregatePhoto: allow,
    aggregateSession: allow,
    aggregateSubscription: allow,
    aggregateUser: allow,
    aggregateVehicle: allow,
    aggregateVehicleDetails: allow,
    aggregateVehicleDocument: allow,
    aggregateVehiclePost: allow,
    aggregateVehicleTransfer: allow,
    findFirstOwnership: allow,
    findFirstPayment: allow,
    findFirstPhoto: allow,
    findFirstSession: allow,
    findFirstSubscription: allow,
    findFirstUser: allow,
    findFirstVehicle: allow,
    findFirstVehicleDetails: allow,
    findFirstVehicleDocument: allow,
    findFirstVehiclePost: allow,
    findFirstVehicleTransfer: allow,
    findManyOwnership: allow,
    findManyPayment: allow,
    findManyPhoto: allow,
    findManySession: allow,
    findManySubscription: allow,
    findManyUser: allow,
    findManyVehicle: allow,
    findManyVehicleDetails: allow,
    findManyVehicleDocument: allow,
    findManyVehiclePost: allow,
    findManyVehicleTransfer: allow,
    findUniqueOwnership: allow,
    findUniquePayment: allow,
    findUniquePhoto: allow,
    findUniqueSession: allow,
    findUniqueSubscription: allow,
    findUniqueUser: allow,
    findUniqueVehicle: allow,
    findUniqueVehicleDetails: allow,
    findUniqueVehicleDocument: allow,
    findUniqueVehiclePost: allow,
    findUniqueVehicleTransfer: allow,
    groupByOwnership: allow,
    groupByPayment: allow,
    groupByPhoto: allow,
    groupBySession: allow,
    groupBySubscription: allow,
    groupByUser: allow,
    groupByVehicle: allow,
    groupByVehicleDetails: allow,
    groupByVehicleDocument: allow,
    groupByVehiclePost: allow,
    groupByVehicleTransfer: allow,
  },
  mutation: {
    createOneOwnership: allow,
    createOnePayment: allow,
    createOnePhoto: allow,
    createOneSession: allow,
    createOneSubscription: allow,
    createOneUser: allow,
    createOneVehicle: allow,
    createOneVehicleDetails: allow,
    createOneVehicleDocument: allow,
    createOneVehiclePost: allow,
    createOneVehicleTransfer: allow,
    deleteManyOwnership: allow,
    deleteManyPayment: allow,
    deleteManyPhoto: allow,
    deleteManySession: allow,
    deleteManySubscription: allow,
    deleteManyUser: allow,
    deleteManyVehicle: allow,
    deleteManyVehicleDetails: allow,
    deleteManyVehicleDocument: allow,
    deleteManyVehiclePost: allow,
    deleteManyVehicleTransfer: allow,
    deleteOneOwnership: allow,
    deleteOnePayment: allow,
    deleteOnePhoto: allow,
    deleteOneSession: allow,
    deleteOneSubscription: allow,
    deleteOneUser: allow,
    deleteOneVehicle: allow,
    deleteOneVehicleDetails: allow,
    deleteOneVehicleDocument: allow,
    deleteOneVehiclePost: allow,
    deleteOneVehicleTransfer: allow,
    updateManyOwnership: allow,
    updateManyPayment: allow,
    updateManyPhoto: allow,
    updateManySession: allow,
    updateManySubscription: allow,
    updateManyUser: allow,
    updateManyVehicle: allow,
    updateManyVehicleDetails: allow,
    updateManyVehicleDocument: allow,
    updateManyVehiclePost: allow,
    updateManyVehicleTransfer: allow,
    updateOneOwnership: allow,
    updateOnePayment: allow,
    updateOnePhoto: allow,
    updateOneSession: allow,
    updateOneSubscription: allow,
    updateOneUser: allow,
    updateOneVehicle: allow,
    updateOneVehicleDetails: allow,
    updateOneVehicleDocument: allow,
    updateOneVehiclePost: allow,
    updateOneVehicleTransfer: allow,
    upsertOneOwnership: allow,
    upsertOnePayment: allow,
    upsertOnePhoto: allow,
    upsertOneSession: allow,
    upsertOneSubscription: allow,
    upsertOneUser: allow,
    upsertOneVehicle: allow,
    upsertOneVehicleDetails: allow,
    upsertOneVehicleDocument: allow,
    upsertOneVehiclePost: allow,
    upsertOneVehicleTransfer: allow,
  },
})
