// modules & hooks
import { useForm } from 'react-hook-form'
import useAdminForms from '../../../../hooks/adminHooks/useAdminForms'
import { Box, Button, Grid, Modal, Typography } from '@mui/material'
import { ErrorMessage } from '@hookform/error-message';
import { MODAL_STYLE } from '../../../../utils/constants';
import useRoles from '../../../../hooks/adminHooks/useRoles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../context';

interface Props {
    open: boolean;
    onClose: () => void;
}

const CreateRole: React.FC<Props> = ({ open, onClose }) => {
    const { createRoleHandler, editRoleHandler } = useRoles()

    const selectedRole = useSelector((state: RootState) => state?.roles?.selectedRole)

    const { createRoleFormResolver } = useAdminForms()

    const { handleSubmit, register, formState: { errors }, reset } =
        useForm<CreateRoleFormValues>({
            resolver: createRoleFormResolver,
            defaultValues: {
                roleName: selectedRole ? selectedRole?.roleName : '',
                roleDescription: selectedRole ? selectedRole?.roleDescription : ''
            }
        })

    const onSubmit = (values: CreateRoleFormValues) => {
        selectedRole ? editRoleHandler(selectedRole?._id, values) : createRoleHandler(values)
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
                <Typography variant="h5" textAlign="center" mb={2}>Create Role</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container flexDirection="column" mb={2}>
                        <label>Role Name</label>
                        <input
                            type="text"
                            {...register("roleName")}
                            style={{
                                margin: '.5rem 0 .2rem 0',
                                padding: '.15rem',
                                fontSize: '1rem'
                            }}
                        />
                        <span style={{ color: 'red' }}>
                            <ErrorMessage errors={errors} name="roleName" />
                        </span>
                    </Grid>
                    <Grid container flexDirection="column" mb={2}>
                        <label>Role Description</label>
                        <input
                            type="text"
                            {...register("roleDescription")}
                            style={{
                                margin: '.5rem 0 .2rem 0',
                                padding: '.15rem',
                                fontSize: '1rem'
                            }}
                        />
                        <span style={{ color: 'red' }}>
                            <ErrorMessage errors={errors} name="roleDescription" />
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

export default CreateRole