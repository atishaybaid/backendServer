import Checkin from "./checkin.modal.js";


export const getCheckin = async (req, res) => {
    try {
        const businessId = req.business._id;
        const checkinList = await Checkin.find({ businessId: businessId }).sort({ updatedAt: -1 }).exec();
        res.status(200).send({ checkinList: checkinList });
    } catch (error) {
        return res.status(500).send({ msg: 'Internal server error' });
    }

}


export const submitCheckin = async (req, res) => {
    const reqBody = req.body;
    try {
        if (!req.body.responseList || !reqBody.responseList.length) {
            return res.status(400).send({ msg: 'mandatory paramenter responseList missing' })
        }



        const checkin = await Checkin.create({
            businessId: req.business._id,
            responseList: reqBody.responseList,
            submittedAt: new Date()
        })
        return res.status(200).send({ msg: 'Checkin submitted sucessfully' });
    } catch (error) {
        return res.status(500).send({ msg: 'Internal server error' });
    }

}

export const deleteCheckin = async (req, res) => {
    const reqBody = req.body;
    if (!req.body.id) {
        return res.status(400).send({ msg: 'mandatory paramenter id missing' })
    }
    const deletedCheckin = await Checkin.deleteOne({ "_id": req.body.id });
    return res.status(200).send({ msg: 'Checkin deleted sucessfully' });

}