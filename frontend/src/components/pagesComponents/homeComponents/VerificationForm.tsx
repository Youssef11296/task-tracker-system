import { Box, FormControl, Input, Modal } from '@mui/material'
import React from 'react'
import { MODAL_STYLE } from '../../../utils/constants';
import { useForm } from 'react-hook-form'
import { AppDispatch } from '../../../context';
import { useDispatch } from 'react-redux';
import { uploadFile } from '../../../context/actions/authActions';
import { useAuth } from '../../../hooks/useAuth';

interface Props {
    open: boolean;
    onClose: () => void;
}

const VerificationForm: React.FC<Props> = ({ open, onClose }) => {
    const { formState, register, handleSubmit } = useForm()
    const { user } = useAuth()

    const dispatch: AppDispatch = useDispatch()

    const onSubmit = (values: any) => {
        dispatch(uploadFile(user?.token, values.nationalIdImg))
        console.log(values)
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
                <h3>Verification Form</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-container">
                        <div className="input-field flex-column">
                            <label htmlFor="nationalIdNum">National ID Number</label>
                            <input type="text" placeholder='Enter your national Id number.' {...register("nationalIdNum")} />
                        </div>
                    </div>
                    <div className="input-container">
                        <div className="input-field flex-column">
                            <input type="file" {...register("nationalIdImg")} />
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </Box>
        </Modal>
    )
}

export default VerificationForm