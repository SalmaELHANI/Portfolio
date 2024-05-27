import Contact from '../models/contact.model.js';
import sendEmail from '../services/emailService.js';

export const createContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new Contact({ name, email, message });
        await newContact.save();

        const emailContent = `
        <h1>Nouvelle Demande de Contact</h1>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong> ${message}</p>
       `;

        await sendEmail(email, 'Merci de nous avoir contactés !', '<p>Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.</p>');
        await sendEmail('salmaelhani7@gmail.com', 'Nouvelle Demande de Contact', emailContent);


        res.status(201).json({ message: 'Contact request created successfully' });
    } catch (error) {
        console.error('Error creating contact:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


export const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        res.status(200).json(contact);
    } catch (error) {
        console.error('Error fetching contact:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const updateContactById = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, { name, email, message }, { new: true, runValidators: true });
        if (!updatedContact) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        res.status(200).json(updatedContact);
    } catch (error) {
        console.error('Error updating contact:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const deleteContactById = async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        if (!deletedContact) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
        console.error('Error deleting contact:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
