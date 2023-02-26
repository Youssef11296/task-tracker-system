import { MoreVert } from '@mui/icons-material'
import {
    StyledTableCell,
    StyledTableRow
} from '../../../uiComponents/muiComponents/TableComponents'
import { Button, IconButton, Popover, Typography } from '@mui/material'
import { useState } from 'react'
import useRoles from '../../../../hooks/adminHooks/useRoles'
import { ConfirmComponent } from '../../../uiComponents/sharedComponents'

interface Props {
    roleData: Role
    roleNumber: number
    openCreateRoleFormHandler: () => void
}

const RoleItem: React.FC<Props> = ({ roleData, roleNumber, openCreateRoleFormHandler }) => {
    const { getRoleNumOfUsers } = useRoles()

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    // confirm component
    const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false)

    // roles actions handlers
    const { selectRoleHandler } = useRoles()

    // btn controllers
    const onClickDeleteBtn = () => {
        selectRoleHandler(roleData)
        setOpenConfirmModal(true)
        handleClose()
    }

    const onClickEditBtn = () => {
        selectRoleHandler(roleData)
        openCreateRoleFormHandler()
        handleClose()
    }

    return (
        <StyledTableRow>
            <StyledTableCell sx={{ textAlign: 'left' }}>{roleNumber}.</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>{roleData?.roleName}</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>{roleData?.roleDescription}</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>{getRoleNumOfUsers(roleData?.roleName)}</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>
                <IconButton onClick={handleClick}>
                    <MoreVert />
                </IconButton>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column !important'
                    }}
                >
                    <Button
                        onClick={onClickEditBtn}
                        sx={{
                            p: 2, display: 'block',
                            textTransform: 'capitalize',
                            fontWeight: 600
                        }}
                    >
                        Edit
                    </Button>
                    <Button
                        onClick={onClickDeleteBtn}
                        sx={{
                            p: 2, display: 'block',
                            textTransform: 'capitalize',
                            fontWeight: 600
                        }}
                    >
                        Delete
                    </Button>
                </Popover>
            </StyledTableCell>
            <ConfirmComponent
                open={openConfirmModal}
                onClose={() => setOpenConfirmModal(false)}
                purpose='DELETE_ROLE'
                question='Do you really want to delete this role?'
            />
        </StyledTableRow>
    )
}

export default RoleItem