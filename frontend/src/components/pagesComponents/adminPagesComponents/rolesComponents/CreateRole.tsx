// modules & hooks
import { useForm } from 'react-hook-form'
import useAdminForms from '../../../../hooks/adminHooks/useAdminForms'
import { Box, Modal } from '@mui/material'
import { ErrorMessage } from '@hookform/error-message';
import { MODAL_STYLE } from '../../../../services/constants';
import useRoles from '../../../../hooks/adminHooks/useRoles';

interface Props {
    open: boolean;
    onClose: () => void;
}

const CreateRole: React.FC<Props> = ({ open, onClose }) => {
    const { createRoleHandler } = useRoles()

    const { createRoleFormResolver } = useAdminForms()

    const { handleSubmit, register, formState: { errors } } = useForm<CreateRoleFormValues>({ resolver: createRoleFormResolver })

    const onSubmit = (values: CreateRoleFormValues) => {
        createRoleHandler(values)
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-fiels">
                        <label>Role Name</label>
                        <input type="text" {...register("roleName")} />
                    </div>
                    <span className="error">
                        <ErrorMessage errors={errors} name="roleName" />
                    </span>
                    <div className="input-fiels">
                        <label>Role Name</label>
                        <input type="text" {...register("roleDescription")} />
                    </div>
                    <span className="error">
                        <ErrorMessage errors={errors} name="roleDescription" />
                    </span>
                    <button type="submit">Submit</button>
                </form>
            </Box>
        </Modal>
    )
}

export default CreateRole