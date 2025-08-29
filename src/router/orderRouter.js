import OrderListComponent from "@/components/OrderListComponent.vue";
import OrderCart from "@/views/OrderCart.vue";


export const orderRouter = [
    {
        path: "/ordering/list",
        name: "OrderListComponent",
        component: OrderListComponent
    },
    {
        path: "/ordering/cart",
        name: "OrderCart",
        component: OrderCart
    }
]