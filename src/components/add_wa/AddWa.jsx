import React, {useState, useEffect} from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import './AddWa.scss'

const AddWa = () => {
  const [name, setName] = useState('')
  const [feedBack, setFeedBack] = useState('')
  const [isDelete, setIsDelete] = useState(false)
  const [nomor, setNomor] = useState('')

  const { admin } = useAuthContext();
  const [nomorWas, setNomorWas] = useState('')
  const [error, setError] = useState(null)

  const handleClick = async (id) => {
        const response = await fetch('https://tbndeliverybackend-production.up.railway.app/api/nomorWa/' + id, {
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
        }
    }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const nomorWa = {name, nomor}
    const response = await fetch('https://tbndeliverybackend-production.up.railway.app/api/nomorWa', {
        method: 'POST',
        body: JSON.stringify(nomorWa),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const json = await response.json()

    if (!response.ok) {
        setError(json.error)
        setIsDelete(false)
        setFeedBack('Gagal Menambahkan')
    }
    if (response.ok) {
        setIsDelete(false)
        setFeedBack('Berhasil Menambahkan')
        setName('')
        setNomor('')
    }

  }

    useEffect(() => {
        const fetchNomors = async () => {
            const response = await fetch('https://tbndeliverybackend-production.up.railway.app/api/nomorWa')
            const json = await response.json()
            if (response.ok) {
                setNomorWas(json)
            }
        }

        fetchNomors()
        }, [handleSubmit, handleClick])
  return (
    <>
    {admin && (
        <>
        <div className="create pb-3">
            <a href='/admin-tbn-delivery'>Ke Menu Admin</a>
            {feedBack && <div class={`alert ${(isDelete) ? 'alert-danger' : 'alert-success'}`} role="alert" style={{display: 'flex', justifyContent:'space-between' }}>{feedBack} <span onClick={() => setFeedBack('')} style={{cursor: 'pointer'}}>X</span></div>}
            <h2>Input Nomor Wa</h2>
            <form onSubmit={handleSubmit}>
                <label>Nama:</label>
                <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Nomor Wa:</label>
                <input 
                    type="text" 
                    required
                    value={nomor}
                    onChange={(e) => setNomor(e.target.value)}
                />
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
                        <th scope="col">Nama</th>
                        <th scope="col">Nomor Wa</th>
                        <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nomorWas && nomorWas.map((nomorWa, index) => (
                            <tr key={nomorWa._id}>
                                <th scope="row">{index+1}</th>
                                <td>{nomorWa.name}</td>
                                <td>{nomorWa.nomor}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => handleClick(nomorWa._id)}>delete</button>
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

export default AddWa