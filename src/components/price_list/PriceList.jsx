import React from 'react'
import { AppWrap, MotionWrap } from "../../wrapper"
import { HiChevronDoubleRight } from "react-icons/hi";
import Price from './Price';
import './PriceList.scss'

const PriceList = () => {
  return (
    <>
        {/* <h2 className="head-text">Price List</h2>
        <p className='testimonial-p' style={{color: 'black'}}>( Harga Pengiriman Paket )</p> */}
        {/* <div className="app__testimonial-items app__flex pt-2">
            <div className="app__testimonial-content pt-2">
                <div style={{padding: '8px', backgroundColor: 'orange', borderRadius: '20px', margin: '8px'}}>
                    <p className="p-text"><HiChevronDoubleRight color='orange'/> Kurang dari 1 KG : Rp. 5.000</p>
                    <p className="p-text"><HiChevronDoubleRight color='orange'/> 1,1 KG - 3 KG : Rp. 10.000 </p>
                    <small style={{color: 'red'}}>( hanya berlaku untuk barang ukuran besar jika masih kecil tetap Harga 5.000 )</small>
                    <p className="p-text"><HiChevronDoubleRight color='orange'/> 3,1 KG - 6 KG : Rp. 10.000</p>
                    <p className="p-text"><HiChevronDoubleRight color='orange'/> 6,1 KG - 9 KG : Rp. 15.000</p>
                    <p className="p-text"><HiChevronDoubleRight color='orange'/> 9,1 KG - 12 KG : Rp. 20.000</p>
                    <p className="p-text"><HiChevronDoubleRight color='orange'/> 12,1 KG - 15 KG : Rp. 25.000</p>
                    <p className="p-text"><HiChevronDoubleRight color='orange'/> 15,1 KG - 20 KG : Rp. 35.000</p>
                </div>
                <h2 style={{padding: '8px', backgroundColor: 'orange', borderRadius: '20px', margin: '8px'}}>Gunakan Alamat :</h2>
                <h3>
                    Jl. Pramuka Komplek Satelit Permai Blok A No. 3 (Kopi Nalar)
                    Kecamatan Banjarmasin Timur Kota Banjarmasin, Kalimantan Selatan.
                    Kode Pos 70238
                </h3>
                <h3 style={{padding: '8px', backgroundColor: 'orange', borderRadius: '20px', margin: '8px'}}>Nama : Arifin (Nama Kalian)</h3>
                <h3 style={{padding: '8px', backgroundColor: 'orange', borderRadius: '20px', margin: '8px'}}>No Hp : 081351583417</h3>
            </div>
        </div> */}
        <Price />
    </>
  )
}

export default AppWrap(
    MotionWrap(PriceList, 'app__footer'),
    'priceList',
    'app__primarybg',
  );