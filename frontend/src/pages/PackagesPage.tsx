import { Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AppDispatch, RootState } from '../context'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPackages } from '../context/actions/packagesActions'
import axios from 'axios'

const PackagesPage = () => {
    const { packagesList } = useSelector((state: RootState) => state.packages)

    const dispatch: AppDispatch = useDispatch()

    const [list, setList] = useState([])

    useEffect(() => {
        dispatch(getAllPackages())
        // axios.get('http://localhost:4000/api/v1/packages').then(data => setList(data.data.data))
    }, [])
    console.log({ packagesList, list })

    return (
        <section style={{ padding: '1rem 2rem', flex: 1, background: '#ecf0f1' }}>
            <Container>
                <Typography>
                    PackagesPage
                </Typography>
            </Container>
        </section>
    )
}

export default PackagesPage