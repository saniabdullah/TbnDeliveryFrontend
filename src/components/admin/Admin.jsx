import React, {useState, useEffect} from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import './Admin.scss'

const Admin = () => {
  const [noResi, setNoResi] = useState('')
  const [name, setName] = useState('')
  const [alamatBarang, setAlamatBarang] = useState('')
  const [feedBack, setFeedBack] = useState('')
  const [isDelete, setIsDelete] = useState(false)
  const [nomorWas, setNomorWas] = useState('')
  const [nomor, setNomor] = useState('')
  const [cod, setCod] = useState('')

  const { admin } = useAuthContext();
  
  const [products, setProducts] = useState(null)
  const [error, setError] = useState(null)
//   const nomor = '6285155100324'

//   const Bearer = 'EAAGq9oJUVs4BAAu3TSk1tkptaNJxqMOnxDMPB5cdsdETk6tWcPgOpZAnjQWX44jgBoaywBKimyzZCrgIZAlvBgn4lB77GVvbGylQD4Rm7q1FuMfZAyzTuIDvONmPohkdlxtAIzYZC59Pibe6pT3KXCFGxqIbtiBgsqoEpZCDWWz3trC3coppbfSR5qT19J4noB6ZAk7mjAr1YeA5o5oRxWC'

  const handleClick = async (id) => {
        const response = await fetch('https://tbndeliverybackend-production.up.railway.app/api/products/' + id, {
            method: 'DELETE',
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setIsDelete(true)
            setFeedBack('Gagal menghapus')
        }
        if (response.ok) {

            setError(null)
            setIsDelete(true)
            setFeedBack('Berhasil Menghapus')
            // console.log('delete', json)
        }
    }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {noResi, name, alamatBarang}
    const response = await fetch('https://tbndeliverybackend-production.up.railway.app/api/products', {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'Content-Type': 'application/json'
        }
    })


    const responseTBN = await fetch('https://graph.facebook.com/v15.0/103407349273714/messages', {
        method: 'POST',
        body: JSON.stringify({ "messaging_product": "whatsapp", 
            "to": `${nomor}`, 
            "type": "template", 
            "template": 
            { 
                "name": "delivery_tbn", 
                "language": { "code": "id" }, 
                "components": [{
                    "type": "body",
                    "parameters": [
                        {
                            "type": "text",
                            "text": `${name}, Paket Anda dengan nomor Resi ${noResi} ${alamatBarang}`
                        }
                    ]
                }] 
            } 
        }),
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_BEARER}`,
            'Content-Type': 'application/json'
        }
    })

    // const responseTBN = await fetch('https://graph.facebook.com/v15.0/103407349273714/messages', {
    //     method: 'POST',
    //     body: JSON.stringify({ "messaging_product": "whatsapp", 
    //         "to": `${nomor}`, 
    //         "type": "template", 
    //         "template": 
    //         { 
    //             "name": "hello_world", 
    //             "language": { "code": "en_US" }
    //         } 
    //     }),
    //     headers: {
    //         'Authorization': `Bearer ${process.env.REACT_APP_BEARER}`,
    //         'Content-Type': 'application/json'
    //     }
    // })

    const json = await response.json()
    await responseTBN.json();

    if (!response.ok) {
        setError(json.error)
        setIsDelete(false)
        setFeedBack('Gagal Menambahkan')
    }
    if (response.ok) {
        setIsDelete(false)
        setFeedBack('Berhasil Menambahkan')
        setNoResi('')
        setName('')
        setAlamatBarang('')
        // console.log('new product added', json)
        
    }

  }

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://tbndeliverybackend-production.up.railway.app/api/products')
            const json = await response.json()
            if (response.ok) {
                setProducts(json)
                
            }
        }

        fetchProducts()
        }, [handleSubmit, handleClick])

    useEffect(() => {
        const fetchNomor = async () => {
            const response = await fetch('https://tbndeliverybackend-production.up.railway.app/api/nomorWa')
            const json = await response.json()
            if (response.ok) {
                setNomorWas(json)
            }
        }

        fetchNomor()
        }, [])

  return (
    <>
        {admin && (
            <>
            <div className="create pb-3">
                <a href='/admin-wa-tbn-delivery'>Tambah Nomor Wa</a>
                {feedBack && <div class={`alert ${(isDelete) ? 'alert-danger' : 'alert-success'}`} role="alert" style={{display: 'flex', justifyContent:'space-between' }}>{feedBack} <span onClick={() => setFeedBack('')} style={{cursor: 'pointer'}}>X</span></div>}
                <h2>Input Resi</h2>
                <form onSubmit={handleSubmit}>
                    <label>Nomor Resi:</label>
                    <input 
                        type="text" 
                        required
                        value={noResi}
                        onChange={(e) => setNoResi(e.target.value.toLowerCase())}
                    />
                    <label>Nama:</label>
                    <select
                        onChange={(e) => {setName(e.target.value.split(",").slice(0, 1).toString()); setNomor(e.target.value.split(",").slice(1).toString());}}
                    >
                        <option value="#">Pilih Nama dan Nomor</option>
                        {nomorWas && nomorWas.map(wa => <option value={`${wa.name},${wa.nomor}`}><span>{wa.name}</span> | <span>{wa.nomor}</span></option> )}                       
                    </select>
                    <label>Jadwal Pengiriman:</label>
                    <select
                        value={alamatBarang}
                        onChange={(e) => setAlamatBarang(e.target.value)}
                    >
                        <option value="#">Pilih Jadwal Pengiriman</option>
                        <option value="Sudah Sampai di tamban">Sudah Sampai di tamban</option>
                        <option value="Dikirim Pada Jam 7 Pagi">Jam 7 Pagi</option>
                        <option value="Dikirim Pada Jam 8 Pagi">Jam 8 Pagi</option>
                        <option value="Dikirim Pada Jam 9 Pagi">Jam 9 Pagi</option>
                        <option value="Dikirim Pada Jam 10 Pagi">Jam 10 Pagi</option>
                        <option value="Dikirim Pada Jam 11 Siang">Jam 11 Siang</option>
                        <option value="Dikirim Pada Jam 12 Siang">Jam 12 Siang</option>
                        <option value="Dikirim Pada Jam 1 Siang">Jam 1 Siang</option>
                        <option value="Dikirim Pada Jam 2 Siang">Jam 2 Siang</option>
                        <option value="Dikirim Pada Jam 3 Siang">Jam 3 Siang</option>
                        <option value="Dikirim Pada Jam 4 Sore">Jam 4 Sore</option>
                        <option value="Dikirim Pada Jam 5 Sore">Jam 5 Sore</option>
                    </select>
                    <button>Tambahkan</button>
                    {error && <div>{error}</div>}
                </form>
            </div>


            <hr />
            <div className='container pt-3'>
                <h2>Data Produk</h2>
                <hr />
                <div className='row'>
                    <table className="table col-6">
                        <thead>
                            <tr>
                            <th scope="col">No.</th>
                            <th scope="col">No Resi</th>
                            <th scope="col">Nama</th>
                            {/* <th scope="col">Alamat Barang</th> */}
                            <th scope='col'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products && products.map((product, index) => (
                                <tr key={product._id}>
                                    <th scope="row">{index+1}</th>
                                    <td>{product.noResi}</td>
                                    <td>{product.name}</td>
                                    {/* <td>{product.alamatBarang}</td> */}
                                    <td>
                                        <button className='btn btn-danger' onClick={() => handleClick(product._id)}>delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </>
            )
            }
        </>
  )
}

export default Admin