export const getFullHistory = state => ((state.history.orders || [] ));
export const getInvoices = state => state.history.invoices;
export const getUser = state => state.user_settings.username;
export const getShopKart = state => state.shop_kart;
export const getOrderStatus = state => state.order_status;

