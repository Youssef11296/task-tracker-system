import {
    StyledTableCell,
    StyledTableRow
} from '../../../uiComponents/muiComponents/TableComponents'

interface Props {
    roleData: Role
    roleNumber: number
}

const RoleItem: React.FC<Props> = ({ roleData, roleNumber }) => {
    return (
        <StyledTableRow>
            <StyledTableCell sx={{ textAlign: 'left' }}>{roleNumber}.</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>{roleData?.roleName}</StyledTableCell>
            <StyledTableCell sx={{ textAlign: 'center' }}>{roleData?.roleDescription}</StyledTableCell>
        </StyledTableRow>
    )
}

export default RoleItem