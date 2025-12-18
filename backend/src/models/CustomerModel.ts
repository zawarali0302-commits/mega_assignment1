import mongoose from 'mongoose';


const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true},
  imageUrl: { type: String, required: false },
  address: {
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
});

customerSchema.set('toJSON', {
  transform: (_document: unknown, returnedObject: any) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;
