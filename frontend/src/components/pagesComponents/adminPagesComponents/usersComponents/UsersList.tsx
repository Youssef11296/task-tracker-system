import {
    Container,
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material'
import React from 'react'
import { StyledTableCell } from '../../../uiComponents/muiComponents/TableComponents'
import UserItem from './UserItem'
import { useSelector } from 'react-redux'
import { useAuth } from '../../../../hooks/useAuth'

interface Props {
    usersList: User[]
}

const UsersList: React.FC<Props> = ({ usersList }) => {
    const { user } = useAuth()

    return (
        <>
            <Container>
                <TableContainer component={Paper} sx={{ overflowX: 'visible' }}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>No.</StyledTableCell>
                                <StyledTableCell sx={{ textAlign: 'center' }}>Username</StyledTableCell>
                                <StyledTableCell align="center">Email</StyledTableCell>
                                <StyledTableCell align="center">Mobile</StyledTableCell>
                                <StyledTableCell align="center">Role Name</StyledTableCell>
                                <StyledTableCell align="center">Package Name</StyledTableCell>
                                <StyledTableCell align="right">Verification</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                usersList?.filter((userData) => userData?.username !== user?.username)
                                    .map((userData: User, index: number) => (
                                        <UserItem userData={userData} userNumber={index + 1} key={userData?._id} />
                                    ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    )
}

export default UsersList