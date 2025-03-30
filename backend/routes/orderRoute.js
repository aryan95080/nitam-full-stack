import express from 'express';
import { placedOrder,placedOrderRazorpay,placedOrderStripe,userOrders,updateStatus,allOrders } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'


const orderRouter=express.Router()

orderRouter.post('/list',adminAuth,allOrders);
orderRouter.post('/status',adminAuth,updateStatus);

//payment feature
orderRouter.post('/place',authUser,placedOrder)
orderRouter.post('/stripe',authUser,placedOrderStripe)
orderRouter.post('/razorpay',authUser,placedOrderRazorpay)

//user feature
orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter