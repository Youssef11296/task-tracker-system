import React from 'react'
import { useForm } from 'react-hook-form'
import useAdminForms from '../../../hooks/adminHooks/useAdminForms'
import useAdminPackages from '../../../hooks/adminHooks/useAdminPackages'
import { Box, Button, Grid, Modal, Typography } from '@mui/material'
import { MODAL_STYLE } from '../../../utils/constants';
import { ErrorMessage } from '@hookform/error-message';
import { useSelector } from 'react-redux'
import { RootState } from '../../../context'

interface Props {
    open: boolean;
    onClose: () => void;
}

const CreatePackage: React.FC<Props> = ({ open, onClose }) => {
    const { createPackageFormResolver } = useAdminForms()
    const { createPackageHandler } = useAdminPackages()
    const { selectedPackage } = useSelector((state: RootState) => state.adminPackages)

    const { handleSubmit, register, reset, formState: { errors } } =
        useForm<CreatePackageFormValues>({
            resolver: createPackageFormResolver,
            defaultValues: {
                packageName: selectedPackage ? selectedPackage?.packageName : '',
                packageDescription: selectedPackage ? selectedPackage?.packageDescription : '',
                packagePrice: selectedPackage ? selectedPackage?.packagePrice : ''
            }
        })

    const onSubmit = (values: CreatePackageFormValues) => {
        createPackageHandler({ ...values })
        reset()
        onClose()
    }

    return (
        <Modal
            sx={{ background: "rgba(0,0,0,.75)" }}
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={MODAL_STYLE}>
                <Typography variant="h5" textAlign="center" mb={2}>Create Package</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container flexDirection="column" mb={2}>
                        <label>Package Name</label>
                        <input
                            type="text"
                            {...register("packageName")}
                            style={{
                                margin: '.5rem 0 .2rem 0',
                                padding: '.15rem',
                                fontSize: '1rem'
                            }}
                        />
                        <span style={{ color: 'red' }}>
                            <ErrorMessage errors={errors} name="packageName" />
                        </span>
                    </Grid>
                    <Grid container flexDirection="column" mb={2}>
                        <label>Package Description</label>
                        <input
                            type="text"
                            {...register("packageDescription")}
                            style={{
                                margin: '.5rem 0 .2rem 0',
                                padding: '.15rem',
                                fontSize: '1rem'
                            }}
                        />
                        <span style={{ color: 'red' }}>
                            <ErrorMessage errors={errors} name="packageDescription" />
                        </span>
                    </Grid>
                    <Grid container flexDirection="column" mb={2}>
                        <label>Package Price</label>
                        <input
                            type="text"
                            {...register("packagePrice")}
                            style={{
                                margin: '.5rem 0 .2rem 0',
                                padding: '.15rem',
                                fontSize: '1rem'
                            }}
                        />
                        <span style={{ color: 'red' }}>
                            <ErrorMessage errors={errors} name="packagePrice" />
                        </span>
                    </Grid>
                    <Button
                        variant="contained"
                        type="submit"
                        sx={{
                            margin: 'auto',
                            display: 'block',
                            textTransform: 'capitalize'
                        }}
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </Modal>
    )
}

export default CreatePackage