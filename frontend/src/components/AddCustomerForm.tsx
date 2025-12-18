import { useForm } from "react-hook-form";
import type { CustomerType } from "../types/CustomerType";
interface AddCustomerFormProps {
  onAddCustomer: (customer: CustomerType) => void;
}

const AddCustomerForm = ({ onAddCustomer }: AddCustomerFormProps) => {
    const {register, handleSubmit} = useForm<CustomerType>();

  return (
    <div>
        <h2 className=" text-xl text-center font-bold mb-4">Add New Customer</h2>
        <form className="max-w-md mx-auto border p-4 rounded" onSubmit={handleSubmit(onAddCustomer)}>
            <div className="mb-4">
                <label className="block mb-1 font-semibold">Name</label>
                <input
                    type="text"
                    placeholder="e.g., John Doe"
                    {...register("name", { required: true })}
                    className="border border-gray-300 p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-semibold">Age</label>
                <input
                    type="number"
                    placeholder="e.g., 30"
                    {...register("age", { required: true })}
                    className="border border-gray-300 p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-semibold">City</label>
                <input
                    type="text"
                    placeholder="e.g., New York"
                    {...register("address.city", { required: true })}
                    className="border border-gray-300 p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-semibold">Country</label>
                <input
                    type="text"
                    placeholder="e.g., USA"
                    {...register("address.country", { required: true })}
                    className="border border-gray-300 p-2 w-full"
                />  
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Add Customer
            </button>
        </form>
    </div>
  )
}

export default AddCustomerForm
