module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            nama_lengkap: String,
            prodi : String,
            nim: String,
            tanggal_lahir: Date 
        },
        {
            timestamps: true,
            freezeTableName : true
        }
    )

    return mongoose.model("mahasiswa", schema)
}
