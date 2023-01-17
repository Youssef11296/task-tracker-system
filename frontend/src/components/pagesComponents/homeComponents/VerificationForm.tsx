import { Box, Button, FormControl, Input, Modal, Typography } from '@mui/material'
import React from 'react'
import { MODAL_STYLE } from '../../../utils/constants';
import { useForm } from 'react-hook-form'
import { AppDispatch } from '../../../context';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../../hooks/useAuth';
import { ErrorMessage } from '@hookform/error-message';
import { sendVerificationRequest } from '../../../context/actions/verificationsActions';
import { useVerifications } from '../../../hooks/useVerifications';

interface Props {
    open: boolean;
    onClose: () => void;
}

const VerificationForm: React.FC<Props> = ({ open, onClose }) => {
    const { formState: { errors }, register, handleSubmit, reset } = useForm()
    const { sendVerificationRequestHandler } = useVerifications()

    const dispatch: AppDispatch = useDispatch()

    const onSubmit = (values: any) => {
        sendVerificationRequestHandler(values.nationalIdNum, values.nationalIdImg)

        reset()
    }

    return (
        <Modal
            sx={{ background: "rgba(0,0,0,.75)" }}
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className='verification-form'
        >
            <Box sx={MODAL_STYLE}>
                <Typography sx={{ textAlign: 'center', mb: 3 }} variant="h5">Verification Form</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-container">
                        <div className="input-field flex-column">
                            <label htmlFor="nationalIdNum">National ID Number</label>
                            <input type="text" placeholder='Enter your national Id number.' {...register("nationalIdNum", {
                                required: 'National ID number is required.',
                                minLength: {
                                    value: 14,
                                    message: "National ID number must contain 14 numbers."
                                }
                            })} />
                        </div>
                        <span className="error">
                            <ErrorMessage errors={errors} name="nationalIdNum" />
                        </span>
                    </div>
                    <div className="input-container">
                        <div className="input-field flex-column">
                            <input type="file" {...register("nationalIdImg", { required: 'National ID image is required.' })} />
                        </div>
                        <span className="error">
                            <ErrorMessage errors={errors} name="nationalIdImg" />
                        </span>
                    </div>
                    <Button type="submit" variant="contained" sx={{ display: 'block', margin: 'auto' }}>Submit</Button>
                </form>
            </Box>
        </Modal>
    )
}

export default VerificationForm