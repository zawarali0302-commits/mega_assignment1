import type { CustomerType } from "../types/CustomerType";

interface CustomerCardComponentProps {
    customer: CustomerType;
}
const CustomerCardComponent = ({ customer }: CustomerCardComponentProps) => {
    return (
        <div className="flex border p-4 mb-4 w-80 rounded shadow">
            <img src={customer.imageUrl} alt={customer.name} className="w-16 h-16 rounded-full" />
            <div className="ml-4">
                <h1 className="text-lg font-semibold">{customer.name}</h1>
                <h1 className="text-gray-600">{customer.age}</h1>
                <p className="text-gray-600">{customer.address.city}, {customer.address.country}</p>
            </div>
        </div>
    )
}

export default CustomerCardComponent
