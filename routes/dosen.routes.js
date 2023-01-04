const {getAll, getById, createData, updatedData, deleteData} = require("../controllers/dosen.controllers")

const router = require("express").Router()

router.get("/", getAll)
router.get("/:id", getById)
router.post("/", createData)
router.put("/:id", updatedData)
router.delete("/:id", deleteData)

module.exports = router
