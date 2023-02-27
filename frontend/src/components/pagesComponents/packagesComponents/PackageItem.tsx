import { Badge, Box, Button, Card, CardContent, Chip, Grid, IconButton, Popover, Typography } from '@mui/material'
import React, { useState } from 'react'
import usePackages from '../../../hooks/usePackages'
import { useAuth } from '../../../hooks/useAuth'
import { MoreVert } from '@mui/icons-material'
import { USER_ROLE } from '../../../utils/constants'
import useAdminPackages from '../../../hooks/adminHooks/useAdminPackages'
import { ConfirmComponent } from '../../uiComponents/sharedComponents'

interface Props {
    packageItem: Package
    choosePackageHandler: (packageId: Package["_id"]) => Promise<void>
    openCreatePackageHandler: () => void
}

const PackageItem: React.FC<Props> = ({ packageItem, choosePackageHandler, openCreatePackageHandler }) => {
    const { user } = useAuth()

    // popover funcs
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // popover btns funcs
    const { selectPackageHandler, getPackageNumOfUsers } = useAdminPackages()


    const onClickDeleteBtn = () => {
        setOpenConfirmComponent(true)
        selectPackageHandler(packageItem)
        handleClose()
    }

    const onClickEditBtn = () => {
        selectPackageHandler(packageItem)
        openCreatePackageHandler()
        handleClose()
    }

    // confirm component funcs
    const [openConfirmComponent, setOpenConfirmComponent] = useState<boolean>(false)

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Grid item lg={4} md={4} xs={12} sm={12}>
            <Card sx={{ width: '100%' }} style={{
                background: '#ddd', color: '#000',
                boxShadow: user?.package?.packageId === packageItem?._id ? '0 4px 8px rgba(0,0,0,.2)' : ''
            }}>
                <CardContent>
                    <Grid container flexDirection="row" justifyContent="space-between" alignItems="center">
                        {user?.package?.packageId === packageItem?._id ?
                            <Chip label="Current" variant='filled' sx={{ color: "#000" }} /> : null
                        }
                        {
                            user?.role?.roleName === USER_ROLE.ADMIN ?
                                (
                                    <>
                                        <Typography variant="caption" ml={2}>
                                            Num of users: {getPackageNumOfUsers(packageItem?._id)}
                                        </Typography>
                                        <IconButton sx={{ marginLeft: 'auto' }} onClick={handleClick}>
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

                                        <ConfirmComponent
                                            open={openConfirmComponent}
                                            onClose={() => setOpenConfirmComponent(false)}
                                            purpose='DELETE_PACKAGE'
                                            question='Do you really want to delete this package?'
                                        />
                                    </>
                                )
                                : null
                        }
                    </Grid>
                    <Typography sx={{ textAlign: 'center', mb: 3 }}>{packageItem?.packageName}</Typography>
                    <Typography sx={{ textAlign: 'center' }}>{packageItem?.packageDescription}</Typography>
                    <Typography sx={{ textAlign: 'center' }}>
                        {packageItem?.packagePrice > 0 ? `${packageItem?.packagePrice}$` : "FREE"}
                    </Typography>
                    <Button
                        variant="outlined"
                        sx={{
                            margin: 'auto', display: 'block', textTransform: 'capitalize', mt: 4
                        }}
                        onClick={() => choosePackageHandler(packageItem?._id)}
                        disabled={user?.package?.packageId === packageItem?._id}
                    >
                        Choose Package
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default PackageItem