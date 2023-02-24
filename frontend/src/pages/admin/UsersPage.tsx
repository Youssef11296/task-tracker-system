import { UsersList } from '../../components/pagesComponents/adminPagesComponents/usersComponents'
import { useAuth } from '../../hooks/useAuth'
import { USER_ROLE } from '../../utils/constants'
import NotFoundPage from '../NotFoundPage'

const UsersPage = () => {
    const { user } = useAuth()

    if (user?.role?.roleName !== USER_ROLE.ADMIN) return <NotFoundPage />

    return (
        <section style={{ padding: '1rem 2rem', flex: 1, background: '#ecf0f1' }}>
            <UsersList />
        </section>
    )
}

export default UsersPage