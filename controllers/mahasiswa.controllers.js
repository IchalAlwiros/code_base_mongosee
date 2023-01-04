const db = require('../models')
const mahasiswa = db.mahasiswa

const getAll = async (req, res) => {
    
    try {
        const data = await mahasiswa.find()
        return res.status(200).json({
            status : 200,
            message : 'Success get all data!',
            payload : data 
        })
        
    } catch (error) {
        return res.status(400).json({
            status : 400,
            message : 'Failed get all data!',
            payload : error.message
        })
    }
}

const getById =  async (req, res) => {
    const {id} = req.params

    try {
        const data = await mahasiswa.findById(id)
        if (!data) {
            return res.status(404).send({
                message : "Data Not Found"
            })      
        }
        return res.status(200).json({
            status : 200,
            message : 'Success Get Data Id',
            payload : data
        })
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message : `Error ${error.message}`
        })
    }
}

const createData = async (req, res) => {
    const {nama_lengkap, prodi, nim, tanggal_lahir} = req.body
    
    let data = {
        nama_lengkap,
        prodi,
        nim,
        tanggal_lahir : new Date(tanggal_lahir)
    }
    try {
        await mahasiswa.create(data)
        return res.status(201).json({
            status : 201,
            message: 'Success Create Data'
        })
    } catch (error) {
        return res.status(401).json({
            status: 401,
            message : `Error ${error.message}`
        })
    }
}

const updatedData =  async (req, res) => {
    const {id} = req.params
    const {nama_lengkap, prodi, nim, tanggal_lahir} = req.body
    
    let data = {
        nama_lengkap,
        prodi,
        nim,
        tanggal_lahir : new Date(tanggal_lahir)
    }

    try {
        const updatedData = await mahasiswa.findByIdAndUpdate(id, data, {useFindAndModify: false})
        if (!updatedData) {
            return res.status(404).send({
                message : "Data Not Found"
            })
        }

        return res.status(201).json({
            message : `Data Success Updated!`
        })
    } catch (error) {
        return res.status(401).json({
            status: 401,
            message : `Error ${error.message}`
        })
    }
}

const deleteData = async (req, res) => {
    const {id} = req.params

    try {
        const data = await mahasiswa.findByIdAndRemove(id)
        if (!data) {
            return res.status(404).send({
                message : "Data Not Found"
            })
        }
        return res.status(200).json({
            status : 200,
            message : `Success Delete Data Id ${id}`,
        })
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message : `Error ${error.message}`
        })
    }
}


module.exports = {
    getAll,
    getById,
    createData, 
    updatedData,
    deleteData
}