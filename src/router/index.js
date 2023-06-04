// Composables
import CustomerListVue from '@/components/ProductsManagement/Customers/CustomerList.vue'
import NewCustomerVue from '@/components/ProductsManagement/Customers/NewCustomer.vue'
import NewProductsVue from '@/components/ProductsManagement/Inventory/NewProducts.vue'
import ProductListVue from '@/components/ProductsManagement/Inventory/ProductList.vue'
import StockAdjustmentVue from '@/components/ProductsManagement/Inventory/StockAdjustment.vue'
import PurchaseReportVue from '@/components/ProductsManagement/Reports/PurchaseReport.vue'
import SalesReportVue from '@/components/ProductsManagement/Reports/SalesReport.vue'
import StockLevelVue from '@/components/ProductsManagement/Reports/StockLevel.vue'
import OrderListVue from '@/components/ProductsManagement/Sales/OrderList.vue'
import SaleQuoteVue from '@/components/ProductsManagement/Sales/SaleQuote.vue'
import ReusableTableVue from '@/components/Reusables/ReusableTableHeader.vue'
import DataTablesVue from '@/components/Reusables/DataTables.vue'
import { createRouter, createWebHistory } from 'vue-router'
import DashboardVue from '@/components/Dashboard/Dashboard.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: DashboardVue,
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
     {
          path:'/inventory/newproducts',
          name: 'newproducts',
          component: NewProductsVue
    },
     {
          path:'/inventory/productlist',
          name: 'productlist',
          component: ProductListVue
    },
     {
          path:'/inventory/stockadjustment',
          name: 'stockadjustment',
          component: StockAdjustmentVue
    },
     {
          path:'/customers/customerlist',
          name: 'customerlist',
          component: CustomerListVue
    },
     {
          path:'/customers/newcustomer',
          name: 'newcustomer',
          component: NewCustomerVue
    },
     {
          path:'/reusable/table',
          name: 'table',
          component: ReusableTableVue
    },
     {
          path:'/dataTables',
          name: 'DataTables',
          component: DataTablesVue
    },
    ],
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
