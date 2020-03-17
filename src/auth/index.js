import { User } from "../resources/user.modal";

export const signup = async (req, res) => {
    console.log("request body");
    console.log(req.body);

    if (!req.body.email || !req.body.password) {

        return res.status(400).send({ msg: 'email and password are mandatory' });
    }

    try {
        await User.create(req.body);
        return res.status(201).send({ success: true });
    } catch (error) {
        console.log(error);
        return res.status(500).end();
    }

}

