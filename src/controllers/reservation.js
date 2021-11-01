import model from "../models/reservation";
import { getPagination } from "../libs/getPagination";

export const getAllReservations = async (req, res) => {
    const { size, page, code } = req.query;
    const condition = code ? {
        code: { $regex: new RegExp(code), $options: "i" }
    } : {};

    const { limit, offset } = getPagination(page, size);
    const data = await model.paginate(condition, { offset, limit });
    res.json(data);
}

export const findReservation = async (req, res) => {
    const { code } = req.params;
    const reservation = await model.find({ code });
    res.json(reservation);
}

export const makeReservation = async (req, res) => {
    const newReservation = new model(req.body);
    const result = await newReservation.save();
    res.json(result);
}