import type { CustomerType } from "../types/CustomerType";
import CustomerCardComponent from "./CustomerCardComponent";

interface TopCustomersComponentProps {
    customers: CustomerType[];
}
const TopCustomersComponent = ({ customers }: TopCustomersComponentProps) => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Top Customers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {customers.filter((customer, index) => index < 5).map((customer) => (
                    <CustomerCardComponent key={customer.id} customer={customer} />
                ))}
            </div>
        </div>
    )
}

export default TopCustomersComponent
