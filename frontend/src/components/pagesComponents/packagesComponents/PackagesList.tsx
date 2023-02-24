import { Container, Grid } from '@mui/material'
import React from 'react'
import PackageItem from './PackageItem'

interface Props {
    packagesList: Package[]
    choosePackageHandler: (packageId: Package["_id"]) => Promise<void>
}

const PackagesList: React.FC<Props> = ({ packagesList, choosePackageHandler }) => {
    return (
        <Container>
            <Grid spacing={3} container flexDirection="row">
                {packagesList?.map((packageItem: Package, index: number) => (
                    <PackageItem packageItem={packageItem} choosePackageHandler={choosePackageHandler} />
                ))}
            </Grid>
        </Container>
    )
}

export default PackagesList