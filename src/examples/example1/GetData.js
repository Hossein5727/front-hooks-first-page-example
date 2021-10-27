import { FormGroup } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getDataContactService } from '../../services/GetDataContactService'
import { TextField, Button } from '@mui/material'

import './GetData.scss'
import { postDataContactService } from '../../services/PostDataContactService'
import { deleteDataContactService } from '../../services/DeleteDataContactService'
import { toast } from 'react-toastify'

function GetData() {

    const [listData, setListData] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        family: '',
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const submitHandler = async (e) => {
        e.preventDefault()

        await postDataContactService(formData)
    }

    const handleDelete = async (id) => {
        console.log(id);

        await deleteDataContactService(id)
        toast.success("Delete Successfuly")
    }

    useEffect(() => {
        const showData = async () => {
            const { data } = await getDataContactService()
            setListData(data)
        }
        try {
            showData()
        } catch (error) {

        }
    }, [listData])

    return (
        <div className="getData">
            {listData && listData.map((item) => (
                <div key={item.id} className="map">
                    <h2 >{item.name}</h2>
                    <button className="btnMap" onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            ))}

            <form onSubmit={submitHandler}>
                <FormGroup >
                    <TextField
                        variant="filled"
                        color="warning"
                        name="name"
                        required
                        label="name"
                        onChange={handleChange}
                    />
                    <TextField
                        variant="filled"
                        color="warning"
                        name="family"
                        required
                        label="family"
                        onChange={handleChange}
                    />
                    <Button type="submit" variant="contained" color="secondary">Add Data</Button>
                </FormGroup>
            </form>
        </div>
    )
}

export default GetData
