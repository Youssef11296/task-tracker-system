import { useEffect } from 'react'
import { UsersList } from '../../components/pagesComponents/adminPagesComponents/usersComponents'
import { useAuth } from '../../hooks/useAuth'
import { USER_ROLE } from '../../utils/constants'
import NotFoundPage from '../NotFoundPage'
import useUsers from '../../hooks/adminHooks/useUsers'
import { Typography } from '@mui/material'

const UsersPage = () => {
    const { usersList, getAllUsersHandler } = useUsers()
    const { user } = useAuth()

    useEffect(() => {
        getAllUsersHandler()
    }, [])

    if (user?.role?.roleName !== USER_ROLE.ADMIN) return <NotFoundPage />

    else return (
        <section style={{ padding: '1rem 2rem', flex: 1, background: '#ecf0f1' }}>
            <Typography variant="h5"
                sx={{
                    textAlign: 'center', pb: 2,
                    borderBottom: '2px solid #000',
                    width: '200px',
                    margin: '1rem auto 2rem'
                }}
            >
                Our Users List
            </Typography>
            {
                usersList?.length === 0 ? <Typography>No users.</Typography>
                    : <UsersList usersList={usersList} />
            }
        </section>
    )
}

export default UsersPage