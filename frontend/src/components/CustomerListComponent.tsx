import type { CustomerType } from "../types/CustomerType";

interface CustomerListComponentProps {
  customers: CustomerType[];
  onDeleteCustomer: (customerId: number) => void;
}

const CustomerListComponent = ({ customers, onDeleteCustomer }: CustomerListComponentProps) => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold mb-4">Customer List</h1>
        <h1 className="text-lg font-semibold">Total Customers: {customers.length}</h1>
      </div>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Age</th>
            <th className="border border-gray-300 px-4 py-2">Address</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td className="border border-gray-300 px-4 py-2">{customer.name}</td>
              <td className="border border-gray-300 px-4 py-2">{customer.age}</td>
              <td className="border border-gray-300 px-4 py-2">{customer.address.city}, {customer.address.country}</td>
              <td className="border border-gray-300 space-x-2 w-1/6">
                <button className="bg-green-500 hover:bg-green-600 rounded cursor:pointer px-2 py-1">Edit</button>
                <button onClick={() => onDeleteCustomer(customer.id)} className="bg-red-500 hover:bg-red-600 rounded cursor:pointer px-2 py-1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CustomerListComponent
