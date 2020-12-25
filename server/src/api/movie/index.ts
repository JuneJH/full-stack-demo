import * as express from 'express';
import {MovieService} from "../../service/movieService";
import {ResponseEntity} from "../ResponseEntity";

const router = express.Router();

router.get("/", async (req, res, next) => {
    const result = await MovieService.find(req.query);
    if (Array.isArray(result)) {
        ResponseEntity.error(res, 400, result);
        return;
    }
    ResponseEntity.findPage(res, 200, result.data, result.total);
})

router.get("/:id", async (req, res, next) => {
    const result = await MovieService.findOneById(req.params.id);
    if (!result) {
        ResponseEntity.error(res, 400, "没有记录");
        return;
    }
    ResponseEntity.success(res, 200, result);
})

router.patch("/:id", async (req, res, next) => {
    const result = await MovieService.edit(req.body,req.params.id);;
    if (Array.isArray(result)) {
        ResponseEntity.error(res, 400, result);
        return;
    }
    ResponseEntity.success(res, 200, result);
})

router.post("/", async (req, res, next) => {
    const result = await MovieService.add(req.body);
    if (Array.isArray(result)) {
        ResponseEntity.error(res, 400, result);
        return;
    }
    ResponseEntity.success(res, 200, result);
})
router.delete("/:id",async (req,res,next) => {
    const result = await MovieService.delete(req.params.id);
    ResponseEntity.success(res, 200, result);
})


export default router;