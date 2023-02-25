import {
    Button,
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

interface Props {
    rolesList: Role[];
    openCreateRoleFormHandler: () => void
}

const RolesList: React.FC<Props> = ({ rolesList, openCreateRoleFormHandler }) => {
    return (
        <>
            <Container>
                <TableContainer component={Paper} sx={{ overflowX: 'visible' }}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>No.</StyledTableCell>
                                <StyledTableCell sx={{ textAlign: 'center' }}>Role Name</StyledTableCell>
                                <StyledTableCell align="center">Role Description</StyledTableCell>
                                <StyledTableCell align="center">Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                rolesList?.length === 0 ? <Typography>No roles.</Typography> : null
                            }

                            {
                                rolesList?.map((roleData: Role, index: number) => (
                                    <RoleItem
                                        roleData={roleData}
                                        roleNumber={index + 1}
                                        key={roleData?._id}
                                        openCreateRoleFormHandler={openCreateRoleFormHandler}
                                    />
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