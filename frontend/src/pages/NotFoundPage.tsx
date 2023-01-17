// hooks & modules
import { Container, Grid, Typography } from '@mui/material'

const NotFoundPage = () => {
    return (
        <Container sx={{ display: 'grid', height: '100%' }}>
            <Grid container flexDirection="column" justifyContent="center" alignItems="center" sx={{ margin: 'auto' }}>
                <Typography variant='h1'>.404.</Typography>
                <Typography variant='h2'>.Page Not Found.</Typography>
            </Grid>
        </Container>
    )
}

export default NotFoundPage