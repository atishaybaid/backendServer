import Contact from './contact.modal.js';

/*
{
    "email" :"ramesh@gmial.com",
    "name":"Ramesh"
}

*/

export const createContact = async (req, res) => {
    console.log("createContact called");

    try {
        if (!req.body.email || !req.body.name) {
            return res.send(400).send({ msg: 'mandatory fields missing' });
        }
        const reqBody = req.body

        const contact = await Contact.create({ name: reqBody.name, email: reqBody.email, businessId: req.business._id, phone: reqBody.phone ? reqBody.phone : "" });
        return res.status(200).send({ msg: 'contact create sucessfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: 'Internal server error' });
    }


}

export const getContacts = async (req, res) => {
    console.log("getContacts called");

    try {
        const data = await Contact.find({ businessId: req.business.id });

        console.log(data);

        return res.status(200).send({ contacts: data });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: 'Internal server error' });
    }


}

export const updateContact = async (req, res) => {
    try {
        if (!req.body.email || !req.body.name || !req.body.phone) {
            return res.send(400).send({ msg: 'pass name email or phone' });
        }
        const reqBody = req.body;
        const id = req.params.id;
        const contact = await Contact.findByIdAndUpdate(id, { name: reqBody.name, email: reqBody.email, businessId: req.business._id, phone: reqBody.phone ? reqBody.phone : "" }, { new: true }).exec();
        return res.status(200).send({ msg: 'contact update sucessfully', contact: contact }, );
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: 'Internal server error' });
    }

}


export const deleteContact = async (req, res) => {
    try {
        if (!req.body.ids) {
            return res.send(400).send({ msg: 'pass contact ids' });
        }

        const contact = await Contact.deleteMany({ _id: { $in: ["5ea4172f128946193e83f920", "5ea41758128946193e83f921"] } }).exec();
        return res.status(200).send({ msg: 'contacts deleted sucessfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: 'Internal server error' });
    }

}


