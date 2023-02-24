import { Badge, Box, Button, Card, CardContent, Chip, Grid, Typography } from '@mui/material'
import React from 'react'
import usePackages from '../../../hooks/usePackages'
import { useAuth } from '../../../hooks/useAuth'

interface Props {
    packageItem: Package
    choosePackageHandler: (packageId: Package["_id"]) => Promise<void>
}

const PackageItem: React.FC<Props> = ({ packageItem, choosePackageHandler }) => {
    const { user } = useAuth()

    return (
        <Grid item lg={4} md={4} xs={12} sm={12}>
            <Card sx={{ width: '100%' }} style={{ background: '#000', color: '#fff' }}>
                <CardContent>
                    {user?.package?.packageId === packageItem?._id ?
                        <Chip label="Current" variant='outlined' sx={{ color: "#fff" }} /> : null
                    }
                    <Typography sx={{ textAlign: 'center', mb: 3 }}>{packageItem?.packageName}</Typography>
                    <Typography sx={{ textAlign: 'center' }}>{packageItem?.packageDescription}</Typography>
                    <Typography sx={{ textAlign: 'center' }}>
                        {packageItem?.packagePrice > 0 ? `${packageItem?.packagePrice}$` : "FREE"}
                    </Typography>
                    <Button
                        variant="outlined"
                        sx={{
                            margin: 'auto', display: 'block', textTransform: 'capitalize', mt: 4
                        }}
                        onClick={() => choosePackageHandler(packageItem?._id)}
                    >
                        Choose Package
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default PackageItem