// hooks & modules
import { useAuth } from '../../../hooks/useAuth';
import { Container, Typography } from '@mui/material';
// components
import NotVerifiedComponent from './NotVerifiedComponent';

const HomeComponent = () => {
    const { user }: { user: User | null } = useAuth();

    return (
        <Container>
            <Typography variant="h4" textAlign="center" mb={2}>Welcome, {user?.username}</Typography>
            {!user.verified ? <NotVerifiedComponent /> : null}
        </Container>
    )
}

export default HomeComponent