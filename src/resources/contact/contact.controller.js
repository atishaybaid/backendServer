import Contact from './contact.modal.js';

/*
{
    "email" :"ramesh@gmial.com",
    "name":"Ramesh"
}

*/

const createContact = async (req, res) => {
    console.log("createContact called");
    try {
        if (!req.body.email || !req.body.name) {
            return res.send(400).send({ msg: 'mandatory fields missing' });
        }
        console.log(req.business);
        console.log(req);
        const contact = await Contact.create({ name: req.name, email: req.email, businessId: req.business.businessId });
        console.log("created contact");
        console.log(contact);
        return res.status(200).send({ msg: 'contact create sucessfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: 'Internal server error' });
    }


}


export default createContact;