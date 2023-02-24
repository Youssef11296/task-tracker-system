import React from 'react'
import { StyledTableCell, StyledTableRow } from '../../../uiComponents/muiComponents/TableComponents'

interface Props {
    user: User
    userNumber: number
}

const UserItem: React.FC<Props> = ({ user, userNumber }) => {
    return (
        <StyledTableRow>
            <StyledTableCell sx={{ textAlign: 'left' }}>{userNumber}.</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>{user?.username}</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>{user?.email}</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>{user?.mobile ?? "--"}</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>{user?.role?.roleName ?? "--"}</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>{user?.package?.packageName ?? "--"}</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'right' }}>{user?.verified ? "Verified" : "Not verified"}</StyledTableCell>
        </StyledTableRow>
    )
}

export default UserItem