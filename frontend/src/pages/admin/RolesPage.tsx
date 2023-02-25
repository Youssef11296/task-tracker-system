import { useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { USER_ROLE } from '../../services/constants'
import NotFoundPage from '../NotFoundPage'
import useRoles from '../../hooks/adminHooks/useRoles'
import RolesList from '../../components/pagesComponents/adminPagesComponents/rolesComponents/RolesList'

const UsersPage = () => {
    const { rolesList, getAllRolesHandler } = useRoles()
    const { user } = useAuth()

    useEffect(() => {
        getAllRolesHandler()
    }, [])

    if (user?.role?.roleName !== USER_ROLE.ADMIN) return <NotFoundPage />

    else return (
        <section style={{ padding: '1rem 2rem', flex: 1, background: '#ecf0f1' }}>
            <RolesList rolesList={rolesList} />
        </section>
    )
}

export default UsersPage