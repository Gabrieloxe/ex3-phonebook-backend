import mongoose from 'mongoose';
import { mongoUrl } from './config.js';
import { Contact } from './contact.js';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw error;
  }
};

export const createContact = async (name, number) => {
  await connectToDatabase();
  try {
    const contact = new Contact({ name, number });
    return await contact.save();
  } finally {
    await mongoose.connection.close();
  }
};

export const getContacts = async () => {
  await connectToDatabase();
  try {
    return await Contact.find({});
  } finally {
    await mongoose.connection.close();
  }
};

export const getContact = async id => {
  await connectToDatabase();
  try {
    return await Contact.findById(id);
  } finally {
    await mongoose.connection.close();
  }
};

export const updateContact = async (id, updatedData) => {
  await connectToDatabase();
  try {
    return await Contact.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
      context: 'query',
    });
  } finally {
    await mongoose.connection.close();
  }
};

export const deleteContact = async id => {
  await connectToDatabase();
  try {
    return await Contact.findByIdAndDelete(id);
  } finally {
    await mongoose.connection.close();
  }
};
