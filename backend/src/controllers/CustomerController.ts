import Customer from "../models/CustomerModel";
import { Request, Response } from "express";

class CustomerController {
    async getAllCustomers(req: Request, res: Response) {
        try {
            const customers = await Customer.find({});
            res.status(200).json(customers);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving customers', error });
        }
    }

    async createCustomer(req: Request, res: Response) {
        try {
            const { name, age, imageUrl, address } = req.body;
            const newCustomer = new Customer({ name, age, imageUrl, address });
            const savedCustomer = await newCustomer.save();
            res.status(201).json(savedCustomer);
        } catch (error) {
            res.status(500).json({ message: 'Error creating customer', error });
        }
    }

    async getCustomerById(req: Request, res: Response) {
        try {
            const customer = await Customer.findById(req.params.id);
            if (customer) {
                res.status(200).json(customer);
            } else {
                res.status(404).json({ message: 'Customer not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving customer', error });
        }
    }

    async updateCustomer(req: Request, res: Response) {
        try {
            const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (updatedCustomer) {
                res.status(200).json(updatedCustomer);
            } else {
                res.status(404).json({ message: 'Customer not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating customer', error });
        }
    }
    async deleteCustomer(req: Request, res: Response) {
        try {
            const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
            if (deletedCustomer) {
                res.status(200).json({ message: 'Customer deleted successfully' });
            } else {
                res.status(404).json({ message: 'Customer not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting customer', error });
        }
    }

}

export default CustomerController;