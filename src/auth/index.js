import { Business } from "../resources/business.modal";
import { generateNewToken, verifyToken } from "./jwtService";


export const signup = async (req, res) => {
    console.log("request body");
    console.log(req.body);

    if (!req.body.email || !req.body.password) {

        return res.status(400).send({ msg: 'email and password are mandatory' });
    }

    try {
        let business = await Business.create(req.body);
        let token = generateNewToken(business);
        return res.status(201).send({ token });
    } catch (error) {
        console.log(error);
        return res.status(500).end();
    }

}

export const login = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {

            return res.status(400).send({ msg: 'need email and password' });
        }

        const business = await Business.findOne({ email: req.body.email }).select('email password').exec();
        if (business.password != req.body.password) {
            return res.status(401).send({ msg: "email password combination is incorrect" });
        }

        return res.status(200).send({ token: generateNewToken(business) })



        res.status(401).send({ msg: "email doest not exists" });
    } catch (error) {
        console.log(error);
        return res.status(500).end();
    }

}

const validateRequest = async (req, res) => {
    const bearer = req.header.authorization;

    if (!bearer || bearer.startsWith('Bearer ')) {
        return res.status(401).end();
    }

    const token = bearer.split('Bearer ')[1].trim()

    let payload;

    try {
        payload = await verifyToken(token);
        const business = await Business.findById(payload.id).select('-password').exec();
        if (!business) {
            return res.status(401).end();
        }

        req.business = req;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).end();
    }
}

