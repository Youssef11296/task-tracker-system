import { Button, FormControl, Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '../context'
import { useForm } from 'react-hook-form'
import { useAuthForms } from '../hooks/useAuthForms'
import { ErrorMessage } from '@hookform/error-message'
import { useCallback, useEffect } from 'react'

const SettingsPage = () => {
    const { user }: { user: User | null } = useSelector((state: RootState) => state.auth)

    const { userSettingsFormResolver } = useAuthForms()

    const { formState: { errors }, reset, handleSubmit, register } = useForm<UserSettingsValues>({ resolver: userSettingsFormResolver })
    const onSubmit = (values: UserSettingsValues) => console.log(values)

    useEffect(() => {
        reset({
            username: user?.username,
            email: user?.email
        })
    }, [])

    return (
        <Grid>
            <FormControl>
                {/* <Typography>Your information</Typography> */}
                <Grid>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-container">
                            <div className="input-field flex-column">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    placeholder="Ex. john@domain.com"
                                    {...register("email")}
                                />
                            </div>
                            <span className="error">
                                <ErrorMessage errors={errors} name="email" />
                            </span>
                        </div>
                        <div className="input-container">
                            <div className="input-field flex-column">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="text"
                                    placeholder="Ex. youraccountpassword"
                                    {...register("username")}
                                />
                            </div>
                            <span className="error">
                                <ErrorMessage errors={errors} name="username" />
                            </span>
                        </div>

                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                margin: "auto",
                                display: "block",
                                textTransform: "capitalize",
                            }}
                        >
                            Save Changes
                        </Button>
                    </form>
                </Grid>
            </FormControl>
        </Grid>
    )
}

export default SettingsPage