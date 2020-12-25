import {Response} from "express";

export class ResponseEntity {

    public static success(res: Response, code, data) {
        res.send({
            code,
            data,
            err: null,
        })
    }

    public static error(res: Response, code, err) {
        res.send({
            code,
            data: null,
            err,
        })
    }

    public static findPage(res: Response, code, data, total) {
        res.send({
            code,
            data,
            total,
        })
    }
}