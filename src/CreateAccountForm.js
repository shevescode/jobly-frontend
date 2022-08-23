import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import React, {useState} from 'react';
import {useForm, Controller, set} from 'react-hook-form';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Password} from 'primereact/password';
import {Checkbox} from 'primereact/checkbox';
import {Dialog} from 'primereact/dialog';
import {classNames} from 'primereact/utils';
import './CreateAccountForm.css';
import {useNavigate} from 'react-router-dom';

export const CreateAccountForm = () => {
    const navigate = useNavigate();
    const [one, setOne] = useState(null);
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);

    const defaultValues = {
        email: '',
        password: '',
        confirmPassword: ''
    }

    const validate = defaultValues => {
        if (defaultValues.password !== defaultValues.confirmPassword) {
            {
                console.log('tutaj');
                setOne(1);
                return "Passwords are not the same, try again"
            }
        }

    }


    const {control, formState: {errors}, handleSubmit, reset} = useForm({defaultValues});

    const onSubmit = async (data) => {
        let errorMsg = validate(data)
        if (errorMsg) {
            setError(errorMsg)
            console.log(error)
            // setOne(0);
            return
        }
        console.log(formData);
        setFormData(data);
        setShowMessage(true);

        await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            })
        });

        setTimeout(function () {
            navigate("/login");
        }, 1000);

        reset();
    };

    const getFormErrorMessage = (name) => {
        if (name === "confirmation") {
            return <small className="p-error">{error}</small>

        }
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text"
                                                                              autoFocus
                                                                              onClick={() => setShowMessage(false)}/>
    </div>;
    const passwordHeader = <h6>Pick a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{lineHeight: '1.5'}}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );

    return (
        <div className="create-acc-form">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter}
                    showHeader={false} breakpoints={{'960px': '80vw'}} style={{width: '30vw'}}>
                <div className="flex justify-content-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{fontSize: '5rem', color: 'var(--green-500)'}}></i>
                    <h5>Registration Successful!</h5>
                    <p style={{lineHeight: 1.5, textIndent: '1rem'}}>
                        Your account has been registered. It'll be valid next 30 days without activation. Please
                        check <b>{formData.email}</b> for activation instructions.
                    </p>
                </div>
            </Dialog>

            <div className="flex justify-content-center">
                <div className="card">

                    <h5 className="text-center register-acc">Register account</h5>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope"/>
                                <Controller name="email" control={control}
                                            rules={{
                                                required: 'Email is required.',
                                                pattern: {
                                                    value: /^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i,
                                                    message: 'Invalid email address. For example: example@email.com'
                                                }
                                            }}
                                            render={({field, fieldState}) => (
                                                <InputText id={field.email} {...field}
                                                           className={classNames({'p-invalid': fieldState.error})}/>
                                            )}/>
                                <label htmlFor="email"
                                       className={classNames({'p-error': !!errors.email})}>Email*</label>
                            </span>
                            {getFormErrorMessage('email')}
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <Controller name="password" control={control}
                                            rules={{required: 'Password is required.'}}
                                            render={({field, fieldState}) => (
                                                <Password id={field.password} {...field} toggleMask
                                                          className={classNames({'p-invalid': fieldState.error})}
                                                          header={passwordHeader} footer={passwordFooter}/>
                                            )}/>
                                <label htmlFor="password"
                                       className={classNames({'p-error': errors.password})}>Password*</label>
                            </span>
                            {getFormErrorMessage('password')}
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <Controller name="confirmPassword" control={control}
                                            rules={{required: 'Confirmation is required.'}}
                                            render={({field, fieldState}) => (
                                                <Password id={field.confirmPassword}   feedback={false}  {...field}
                                                          toggleMask
                                                          className={classNames({'p-invalid': fieldState.error})}
                                                />
                                            )}/>
                                <label htmlFor="password"
                                       className={classNames({'p-error': errors.confirmPassword})}>Confirm password*</label>
                            </span>
                            <p>{one}</p>
                            {one === 1 ? getFormErrorMessage('confirmation') : getFormErrorMessage('confirmPassword')}
                        </div>
                        <div className="field-checkbox">
                            <Controller name="accept" control={control} rules={{required: true}}
                                        render={({field, fieldState}) => (
                                            <Checkbox inputId={field.name} onChange={(e) => field.onChange(e.checked)}
                                                      checked={field.value}
                                                      className={classNames({'p-invalid': fieldState.error})}/>
                                        )}/>
                            <label htmlFor="accept" className={classNames({'p-error': errors.accept})}>I agree to the
                                terms and conditions*</label>
                        </div>
                        <Button type="submit" label="Create account" className="mt-2 create-acc"/>
                    </form>
                </div>
            </div>
        </div>
    );
}