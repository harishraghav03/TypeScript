import { Router } from "express";
import CreateReminderDto from "../dtos/create-reminder";
import Reminder from "../models/reminder";

const router = Router();
const reminders: Reminder[] = [];

router.get('/', (req, res) => {
    res.json(reminders);
});

router.post('/', (req, res) => {
    // The type of body is any, the express doesn't know what the client gonna send -> We need an interface
    // By default express doesn't parse incomming request bodies -> Install MiddleWare
    const {title} = req.body as CreateReminderDto;
    const reminder = new Reminder(title);
    reminders.push(reminder);
    res.status(201).json(reminder);
});

export default router;