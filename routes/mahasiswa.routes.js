const {getAll, updatedData, createData, deleteData, getById} = require("../controllers/mahasiswa.controllers")

const router = require('express').Router()  

router.get("/", getAll)
router.get("/:id", getById)
router.post("/", createData)
router.put("/:id", updatedData)
router.delete("/:id", deleteData)

module.exports = router
