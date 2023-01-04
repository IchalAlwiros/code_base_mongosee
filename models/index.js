const dbConfig = require("../config/databases")
const mongoose = require("mongoose")

module.exports = {
    mongoose,
    url : dbConfig.url,
    mahasiswa: require("./mahasiswa.models")(mongoose),
    dosen: require("./dosen.model")(mongoose)
}
