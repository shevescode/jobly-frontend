import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Password} from 'primereact/password';
import {Dialog} from 'primereact/dialog';
import {Divider} from 'primereact/divider';
import {classNames} from 'primereact/utils';
import './LogInForm.css';
import {useNavigate} from 'react-router-dom';

export const LogInForm = () => {
    const navigate = useNavigate();
    const [showMessage, setShowMessage] = useState(false);
    // const [formData, setFormData] = useState({});

    const defaultValues = {
        email: '',
        password: '',
    }

    const {control, formState: {errors}, handleSubmit, reset} = useForm({defaultValues});

    const onSubmit = async (data) => {
        // setFormData(data);
        setShowMessage(true);
        await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            })
        });
        setTimeout(function () {
            navigate("/select-profile");
        }, 1000);
        reset();

    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text"
                                                                              autoFocus
                                                                              onClick={() => setShowMessage(false)}/>
    </div>;


    return (
        <div className="log-in-acc-form">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter}
                    showHeader={false} breakpoints={{'960px': '80vw'}} style={{width: '30vw'}}>
                <div className="flex justify-content-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{fontSize: '5rem', color: 'var(--green-500)'}}></i>
                    <h5>Login Successful!</h5>
                    <p style={{lineHeight: 1.5, textIndent: '1rem'}}>
                        Welcome, You're logged in!
                    </p>
                </div>
            </Dialog>

            <div className="flex justify-content-center">
                <div className="card">
                    <h5 className="text-center login-in-text">Log in</h5>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope"/>
                                <Controller name="email" control={control}
                                            rules={{
                                                required: 'Email is required.',
                                                pattern: {
                                                    value: /^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i,
                                                    message: 'Invalid email address. E.g. example@email.com'
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
                                                          />
                                            )}/>
                                <label htmlFor="password"
                                       className={classNames({'p-error': errors.password})}>Password*</label>
                            </span>
                            {getFormErrorMessage('password')}
                        </div>
                        <Button type="submit" label="Log in" className="mt-2"/>
                    </form>
                </div>
            </div>
        </div>
    );
}
