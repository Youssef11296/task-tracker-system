import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

interface Props {
    packageItem: Package
}

const PackageItem: React.FC<Props> = ({ packageItem }) => {
    return (
        <Grid item lg={4} md={4} xs={12} sm={12}>
            <Card sx={{ width: '100%' }} style={{ background: '#000', color: '#fff' }}>
                <CardContent>
                    <Typography sx={{ textAlign: 'center', mb: 3 }}>{packageItem?.packageName}</Typography>
                    <Typography sx={{ textAlign: 'center' }}>{packageItem?.packageDescription}</Typography>
                    <Typography sx={{ textAlign: 'center' }}>
                        {packageItem?.packagePrice > 0 ? `${packageItem?.packagePrice}$` : "FREE"}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default PackageItem