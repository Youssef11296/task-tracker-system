import { Container, Typography } from '@mui/material'
import { useEffect } from 'react'
import { AppDispatch, RootState } from '../context'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPackages } from '../context/actions/packagesActions'

const PackagesPage = () => {
    const { packagesList } = useSelector((state: RootState) => state.packages)

    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPackages())
    }, [])

    console.log({ packagesList })

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