// Composables
import PurchaseReportVue from '@/components/ProductsManagement/Reports/PurchaseReport.vue'
import SalesReportVue from '@/components/ProductsManagement/Reports/SalesReport.vue'
import StockLevelVue from '@/components/ProductsManagement/Reports/StockLevel.vue'
import OrderListVue from '@/components/ProductsManagement/Sales/OrderList.vue'
import SaleQuoteVue from '@/components/ProductsManagement/Sales/SaleQuote.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path:'/sales/orderlist',
        name: 'OrderList',
        component: OrderListVue
     },
     {
          path:'/sales/salesreport',
          name: 'SalesReport',
          component: SalesReportVue
    },
     {
          path:'/sales/salesquote',
          name: 'SalesQuote',
          component: SaleQuoteVue
    },
     {
          path:'/report/purchasereport',
          name: 'purchasereport',
          component: PurchaseReportVue
    },
     {
          path:'/report/salesreport',
          name: 'salereport',
          component: SalesReportVue
    },
     {
          path:'/report/salesreport',
          name: 'salereport',
          component: SalesReportVue
    },
     {
          path:'/report/stocklevel',
          name: 'stocklevel',
          component: StockLevelVue
    },
    ],
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
