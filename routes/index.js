module.exports = app => {
    const  Mahasiswa = require('./mahasiswa.routes')
    app.use("/mahasiswa", Mahasiswa)

    const Dosen = require("./dosen.routes")
    app.use("/dosen", Dosen)
}