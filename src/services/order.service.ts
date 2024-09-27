import { IOrder, IOrderItem } from '@/types/order.interface';

import { instance } from '@/api/api.intercepter';

const ORDERS = '/reviews';

export const OrderService = {
  async getAll() {
    return instance<IOrder[]>({
      url: ORDERS,
      method: 'GET',
    });
  },

  async place(data: { items: IOrderItem[] }) {
    return instance({
      url: ORDERS,
      method: 'POST',
      data,
    });
  },
};
