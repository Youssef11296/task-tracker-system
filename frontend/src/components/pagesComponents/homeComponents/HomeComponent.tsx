// hooks & modules
import { useAuth } from '../../../hooks/useAuth';
import { Container, Typography } from '@mui/material';
// components
import NotVerifiedComponent from './NotVerifiedComponent';

const HomeComponent = () => {
    const { user }: { user: User | null } = useAuth();

    if (!user?.verified) return (
        <Container>
            <NotVerifiedComponent />
        </Container>
    )

    return (
        <Container>
            <Typography>Welcome, {user?.username}</Typography>
        </Container>
    )
}

export default HomeComponent