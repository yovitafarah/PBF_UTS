import React from "react";

const Post = (brg) => {
    return (

        <div className="smartphone">
            <div className="konten-smartphone">
                <div className="gambar-smartphone">
                    <img src={brg.gambar} width="150" height="150" alt="" />
                </div>
                <div className="isi-smartphone">
                    <p id="id-brg">ID : {brg.id}</p>
                    <p id="nama-brg">{brg.nama}</p>
                    <p>Stok : {brg.stok} </p>
                    <p id="harga-brg">Rp. {brg.harga}</p>
                </div>
            </div>
            <button className="btn btn-sm" onClick={brg.tambahSmartphone.bind(this, brg.id)}>Beli</button>
        </div>

    )
}

export default Post;