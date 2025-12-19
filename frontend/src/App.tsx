import { useEffect, useState } from "react"
import CustomerListComponent from "./components/CustomerListComponent"
import type { CustomerType } from "./types/CustomerType"
import api from "./axios";
import TopCustomersComponent from "./components/TopCustomersComponent";
import AddCustomerForm from "./components/AddCustomerForm";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  const [customers, setCustomers] = useState<CustomerType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.get("/api/customers");
      setCustomers(response.data);
    } catch (error) {
      setError("Error fetching customer data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
const handleDeleteCustomer = async (customerId: number) => {
    try {
      await api.delete(`/api/customers/${customerId}`);
      setCustomers((prevCustomers) =>
        prevCustomers.filter((customer) => customer.id !== customerId)
      );
    } catch (error) {
      setError("Error deleting customer");
    }
  };

  const handleAddCustomer = async (customer: CustomerType) => {
    try {
      const response = await api.post("/api/customers", customer);
      setCustomers((prevCustomers) => [...prevCustomers, response.data]);
    } catch (error) {
      setError("Error adding customer");
    }
  };

  return (
    <>
      <HeaderComponent/>
      <AddCustomerForm onAddCustomer={handleAddCustomer} />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <TopCustomersComponent customers={customers} />
      <CustomerListComponent customers={customers} onDeleteCustomer={handleDeleteCustomer} />
      <FooterComponent />
    </>

  )
}

export default App
