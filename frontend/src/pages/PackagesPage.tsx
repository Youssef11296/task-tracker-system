import { Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { AppDispatch } from '../context'
import { useDispatch } from 'react-redux'
import { getAllPackages } from '../context/actions/packagesActions'

const PackagesPage = () => {
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPackages())
    }, [])

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