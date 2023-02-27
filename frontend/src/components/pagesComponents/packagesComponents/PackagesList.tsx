import { Container, Grid } from '@mui/material'
import React from 'react'
import PackageItem from './PackageItem'

interface Props {
    packagesList: Package[]
    choosePackageHandler: (packageId: Package["_id"]) => Promise<void>
    openCreatePackageHandler: () => void
}

const PackagesList: React.FC<Props> = ({ packagesList, choosePackageHandler, openCreatePackageHandler }) => {
    return (
        <Container>
            <Grid spacing={3} container flexDirection="row">
                {packagesList?.map((packageItem: Package, index: number) => (
                    <PackageItem
                        key={packageItem?._id}
                        packageItem={packageItem}
                        choosePackageHandler={choosePackageHandler}
                        openCreatePackageHandler={openCreatePackageHandler}
                    />
                ))}
            </Grid>
        </Container>
    )
}

export default PackagesList