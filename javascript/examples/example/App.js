import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Autoenhance from '@autoenhance/javascript';

const autoenhance = new Autoenhance(process.env.REACT_APP_API_KEY);

export default function App() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      setLoading(true);
      try {
        const orders = await autoenhance.OrdersApi.listOrders();
        setOrders(orders.orders);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchOrders();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : orders.length === 0 ? (
        <Text>You don't have any orders *sad face*</Text>
      ) : (
        orders.map((order) => 
        
        
        <View key={order.order_id}>
          <Text>
            {console.debug(order)}
            {order.orderId} ({order.status})
          </Text>
          <img src={`https://dev.api.autoenhance.ai/v3/images/${order.images[0].imageId}/preview`} />
        </View>)
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
