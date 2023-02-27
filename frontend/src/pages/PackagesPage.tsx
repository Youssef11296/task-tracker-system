// modules & hooks
import { useEffect } from 'react'
import usePackages from '../hooks/usePackages'
// mui
import { Button, Container, Typography } from '@mui/material'
import { CreatePackage, PackagesList } from '../components/pagesComponents/packagesComponents'
import useAdminPackages from '../hooks/adminHooks/useAdminPackages'

const PackagesPage = () => {
    const {
        packagesList,
        getAllPackagesHandler,
        choosePackageHandler,
    } = usePackages()

    const {
        openCreatePackage,
        openCreatePackageHandler,
        closeCreatePackageHandler
    } = useAdminPackages()

    useEffect(() => {
        getAllPackagesHandler()
    }, [])

    return (
        <section style={{ padding: '1rem 2rem', flex: 1, background: '#ecf0f1' }}>
            <Container>
                <Button
                    variant="outlined"
                    onClick={openCreatePackageHandler}
                    sx={{ textTransform: "capitalize" }}
                >
                    Create Package</Button>
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
                <PackagesList
                    packagesList={packagesList}
                    choosePackageHandler={choosePackageHandler}
                    openCreatePackageHandler={openCreatePackageHandler}
                />
                <CreatePackage
                    open={openCreatePackage}
                    onClose={closeCreatePackageHandler}
                />
            </Container>
        </section>
    )
}

export default PackagesPage