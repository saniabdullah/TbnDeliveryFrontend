import React, { useEffect, useState} from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import './Price.scss'
import { images } from '../../constants';

const Price = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const priceLists = [
        {imgurl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png", harga: "Kurang dari 1 KG :", hargaDetail: 'Rp. 5.000', level: 'Level 1', desc: null},
        {imgurl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer.png", harga: "1,1 KG - 3 KG :", hargaDetail: 'Rp. 10.000', level: 'Level 2', desc: 'hanya berlaku untuk barang ukuran besar jika masih kecil tetap Harga 5.000'},
        {imgurl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant.png", harga: "3,1 KG - 6 KG :", hargaDetail: 'Rp. 10.000', level: 'Level 3', desc: null},
        {imgurl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/goblin.png", harga: "6,1 KG - 9 KG :", hargaDetail: 'Rp. 15.000', level: 'Level 4', desc: null},
        {imgurl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard.png", harga: "9,1 KG - 12 KG :", hargaDetail: 'Rp. 20.000', level: 'Level 5', desc: null},
        {imgurl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png", harga: "12,1 KG - 15 KG :", hargaDetail: 'Rp. 25.000', level: 'Level 6', desc: null},
        {imgurl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant.png", harga: "15,1 KG - 20 KG :", hargaDetail: 'Rp. 35.000', level: 'Level 7', desc: null},

    ];

    
    const handleClick = (index) => {
        setCurrentIndex(index);
    };
    
  return (
    <div>
        <p className='testimonial-p' style={{color: 'black'}}>Harga Pengiriman</p>
        {
            priceLists.length && (
                <>
                <div className="slide-container">
                    <div className="wrapper">
                        <div className="clash-card barbarian">
                            <div className="clash-card__image clash-card__image--barbarian">
                                <img src={priceLists[currentIndex].imgurl} alt="barbarian" />
                            </div>
                        <div className="clash-card__level clash-card__level--barbarian">{priceLists[currentIndex].level}</div>
                        <div className="clash-card__unit-description" style={{color: "black", fontSize: '20px'}}>
                            {priceLists[currentIndex].harga}
                        </div>
                        <div className="clash-card__unit-name" style={{color: "red"}}>{priceLists[currentIndex].hargaDetail}</div>
                        {
                            priceLists[currentIndex].desc != null ? <div className="" style={{color: "black"}}>
                                <hr/>
                                <small>{priceLists[currentIndex].desc}</small>
                            </div> : <div></div>
                        }
                        <hr  style={{border: '3px'}}/>
                        <h3 style={{color: "black"}}>Gunakan Alamat:</h3>
                        <div className="clash-card__unit-description" style={{color: "black"}}>
                            Jl. Pramuka Komplek Satelit Permai Blok A No. 3 (Kopi Nalar)
                            Kecamatan Banjarmasin Timur Kota Banjarmasin, Kalimantan Selatan.
                            Kode Pos 70238
                        </div>
                        {/* <hr /> */}
                        <div className="app__testimonial-btns app__flex" style={{paddingBottom: '30px'}}>
                            <div className="app__flex shadow" onClick={() => handleClick(currentIndex === 0 ? priceLists.length - 1 : currentIndex - 1)}>
                            <HiChevronLeft  color='red' />
                            </div>

                            <div className="app__flex shadow" onClick={() => handleClick(currentIndex === priceLists.length - 1 ? 0 : currentIndex + 1)}>
                            <HiChevronRight  color='red'/>
                            </div>
                        </div>
                        </div>
                    </div> 
                </div> 
                </>
            )
        }
    </div>
  )
}

export default Price