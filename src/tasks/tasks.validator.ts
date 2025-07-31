import { body, ValidationChain } from "express-validator";
import { Status } from "../enums/Status";
import { Priority } from "../enums/Priority";
export const createValidator:ValidationChain[]=[
    body('title')
    .not()
    .isEmpty()
    .withMessage('Tiêu đề là bắt buộc')
    .trim()
    .isString()
    .withMessage('Định dạng text'),
    body('date')
    .not()
    .isEmpty()
    .withMessage('Ngày là bắt buộc')
    .isString()
    .withMessage('Định dạng đúng Date'),
    body('description')
    .trim()
    .isString()
    .withMessage('Định dạng text'),
    body('priority')
    .trim()
    .isIn([Priority.high, Priority.normal, Priority.low])
    .withMessage('Chỉ có thể chọn High/Normal/Low'),
    body('status')
    .trim()
    .isIn([Status.completed, Status.inProgress, Status.todo])
    .withMessage('Chỉ có thể chọn ToDo/InProgress/Comlelted'),
]