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
import RoleItem from './RoleItem'
import { useSelector } from 'react-redux'
import { useAuth } from '../../../../hooks/useAuth'

interface Props {
    rolesList: Role[]
}

const RolesList: React.FC<Props> = ({ rolesList }) => {
    return (
        <>
            <Container>
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
                <TableContainer component={Paper} sx={{ overflowX: 'visible' }}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>No.</StyledTableCell>
                                <StyledTableCell sx={{ textAlign: 'center' }}>Role Name</StyledTableCell>
                                <StyledTableCell align="center">Role Desription</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                rolesList?.length === 0 ? <Typography>No roles.</Typography> : null
                            }

                            {
                                rolesList?.map((roleData: Role, index: number) => (
                                    <RoleItem roleData={roleData} roleNumber={index + 1} key={roleData?._id} />
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    )
}

export default RolesList