// import { updateSubscriptionStatus, verifyAndroidReceipt, verifyIOSReceipt } from "../utils/iapService"

// export const handleIOSPayment = async (userId: string, receiptData: string): Promise<string> => {
//   const receipt = await verifyIOSReceipt(receiptData)

//   // Process the receipt and update the subscription status
//   await updateSubscriptionStatus(userId, true)

//   return "iOS payment handled successfully."
// }

// export const handleAndroidPayment = async (userId: string, paymentToken: string, productId: string): Promise<string> => {
//   const receipt = await verifyAndroidReceipt(paymentToken, productId)

//   // Process the receipt and update the subscription status
//   await updateSubscriptionStatus(userId, true)

//   return "Android payment handled successfully."
// }
