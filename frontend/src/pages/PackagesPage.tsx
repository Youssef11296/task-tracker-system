// modules & hooks
import { useEffect } from 'react'
import usePackages from '../hooks/usePackages'
// mui
import { Container, Typography } from '@mui/material'
import PackagesList from '../components/pagesComponents/packagesComponents/PackagesList'

const PackagesPage = () => {
    const { packagesList, getAllPackagesHandler, choosePackageHandler } = usePackages()

    useEffect(() => {
        getAllPackagesHandler()
    }, [])

    return (
        <section style={{ padding: '1rem 2rem', flex: 1, background: '#ecf0f1' }}>
            <Container>
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: 'center', pb: 2,
                        borderBottom: '2px solid #000',
                        width: '200px',
                        margin: '1rem auto 2rem'
                    }}
                >
                    Our Packages
                </Typography>
                <PackagesList packagesList={packagesList} choosePackageHandler={choosePackageHandler} />
            </Container>
        </section>
    )
}

export default PackagesPage