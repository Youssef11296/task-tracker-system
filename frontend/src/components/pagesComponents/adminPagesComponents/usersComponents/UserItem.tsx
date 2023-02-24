import {
    StyledTableCell,
    StyledTableRow
} from '../../../uiComponents/muiComponents/TableComponents'

interface Props {
    userData: User
    userNumber: number
}

const UserItem: React.FC<Props> = ({ userData, userNumber }) => {
    return (
        <StyledTableRow>
            <StyledTableCell sx={{ textAlign: 'left' }}>{userNumber}.</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>{userData?.username}</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>{userData?.email}</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>{userData?.mobile ?? "--"}</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>{userData?.role?.roleName ?? "--"}</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>{userData?.package?.packageName ?? "--"}</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'right' }}>{userData?.verified ? "Verified" : "Not verified"}</StyledTableCell>
        </StyledTableRow>
    )
}

export default UserItem