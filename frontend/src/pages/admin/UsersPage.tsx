import { useEffect } from 'react'
import { UsersList } from '../../components/pagesComponents/adminPagesComponents/usersComponents'
import { useAuth } from '../../hooks/useAuth'
import { USER_ROLE } from '../../utils/constants'
import NotFoundPage from '../NotFoundPage'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../context'
import { getAllUsers } from '../../context/actions/adminActions/usersActions'
import useUsers from '../../hooks/adminHooks/useUsers'

const UsersPage = () => {
    const { usersList, getAllUsersHandler } = useUsers()
    const { user } = useAuth()

    useEffect(() => {
        getAllUsersHandler()
    }, [])

    if (user?.role?.roleName !== USER_ROLE.ADMIN) return <NotFoundPage />

    else return (
        <section style={{ padding: '1rem 2rem', flex: 1, background: '#ecf0f1' }}>
            <UsersList usersList={usersList} />
        </section>
    )
}

export default UsersPage