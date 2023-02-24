import { Container, Grid } from '@mui/material'
import React from 'react'
import PackageItem from './PackageItem'

interface Props {
    packagesList: Package[]
}

const PackagesList: React.FC<Props> = ({ packagesList }) => {
    return (
        <Container>
            <Grid spacing={3} container flexDirection="row">
                {packagesList?.map((packageItem: Package, index: number) => (
                    <PackageItem packageItem={packageItem} />
                ))}
            </Grid>
        </Container>
    )
}

export default PackagesList