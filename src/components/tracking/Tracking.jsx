import React, {useState, useEffect} from 'react'
import { AppWrap, MotionWrap } from "../../wrapper"
import './Tracking.scss'

const Tracking = () => {

    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    const handleClick = async (noTracking) => {
        // console.log(noTracking)
        if (noTracking != '') {
            const response = await fetch('https://tbndeliverybackend-production.up.railway.app/api/products/' + noTracking)

            console.log(response)
            const json = await response.json()
            console.log(json)
            if (response.ok) {
                setProduct(json)
                setIsLoading(false) 
                setError('') 
            }
            if (!response.ok) {
                setProduct('')
                setError(json.error)  
            }
        } else {
            setError('Masukkan nomor resi')
            console.log(error)
        }
    }

    // const input = document.getElementsByTagName("input");
    // input.addEventListener('input', function() {
    //     alert("You clicked the white element!");

    // });

    // useEffect(() => {
    // }, [handleClick])
    

    const [noTracking, setNoTracking] = useState('')
    const handleChangeInput = (e) => {
        const nomor = e.target.value.toLowerCase();
        setNoTracking(nomor);
    };
    return (
        <>
        <p className='testimonial-p' style={{color: 'black'}}>Cek Resi</p>
            <div className='app__testimonial-item'>
                <div className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input className="p-text" type="text" placeholder="Masukkan Nomor Tracking" name="noTracking" value={noTracking} onChange={handleChangeInput} />
                    </div>
                    <button type="button" className="p-text" onClick={() => handleClick(noTracking)}>Cari</button>
                    {product && product.map((p) => (
                        <>
                            <h3 style={{paddingTop: '20px', color: 'black'}}>Nama: <span style={{color: 'green'}}>{(p.name).toUpperCase()}</span></h3>
                            <h1 style={{paddingTop: '10px', color: 'black', textAlign: 'center'}}>Barang anda saat ini : <span style={{color: 'green'}}>{(p.alamatBarang).toUpperCase()}</span></h1>
                        </>
                        ))
                    }
                    {error && <h1 style={{paddingTop: '10px', color: 'red', textAlign: 'center'}}>{error}</h1>}
                </div>
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Tracking, 'app__testimonial'),
    'tracking',
    'app__primarybg',
);