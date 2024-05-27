import express from 'express';
import {
   createContact,
   getAllContacts,
   getContactById,
   updateContactById,
   deleteContactById
} from '../controllers/contact.controller.js';

const router = express.Router();

router.post('/contacts', createContact);
router.get('/contacts', getAllContacts);
router.get('/contacts/:id', getContactById);
router.put('/contacts/:id', updateContactById);
router.delete('/contacts/:id', deleteContactById);

export default router;
