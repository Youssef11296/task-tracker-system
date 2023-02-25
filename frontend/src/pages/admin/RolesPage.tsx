import { useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { USER_ROLE } from '../../services/constants'
import NotFoundPage from '../NotFoundPage'
import useRoles from '../../hooks/adminHooks/useRoles'
import RolesList from '../../components/pagesComponents/adminPagesComponents/rolesComponents/RolesList'
import { Button, Typography } from '@mui/material'
import { CreateRole } from '../../components/pagesComponents/adminPagesComponents/rolesComponents'

const UsersPage = () => {
    const {
        rolesList,
        getAllRolesHandler,
        openCreateRoleForm,
        openCreateRoleFormHandler,
        closeCreateRoleFormHandler,
    } = useRoles()
    const { user } = useAuth()

    useEffect(() => {
        getAllRolesHandler()
    }, [])

    if (user?.role?.roleName !== USER_ROLE.ADMIN) return <NotFoundPage />

    else return (
        <section style={{ padding: '1rem 2rem', flex: 1, background: '#ecf0f1' }}>
            <Button
                variant="outlined"
                sx={{ textTransform: 'capitalize' }}
                onClick={openCreateRoleFormHandler}
            >
                Create Role
            </Button>
            <Typography variant="h5"
                sx={{
                    textAlign: 'center', pb: 2,
                    borderBottom: '2px solid #000',
                    width: '200px',
                    margin: '1rem auto 2rem'
                }}
            >
                Our Roles List
            </Typography>

            <RolesList rolesList={rolesList} />

            <CreateRole open={openCreateRoleForm} onClose={closeCreateRoleFormHandler} />
        </section>
    )
}

export default UsersPage