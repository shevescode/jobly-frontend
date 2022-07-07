import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
// import './index.css';
// import Button from './Button';
import ReactDOM from 'react-dom';

import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {InputText} from 'primereact/inputtext';
// import {Button} from 'primereact/button';
import {Button} from 'primereact/button';
import {Password} from 'primereact/password';
import {Checkbox} from 'primereact/checkbox';
import {Dialog} from 'primereact/dialog';
import {Divider} from 'primereact/divider';
import {classNames} from 'primereact/utils';
import './CreateAccountForm.css';

export const CreateAccountForm = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let handleSub = async () => {
        try {
            let res = await fetch("http://localhost:5000/api/auth/signup", {
                contentType: "application/json; charset=utf-8",
                method: "POST",
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            })
            let resJson = await res.json();
            if (res.status === 200) {
                setEmail("");
                setPassword("");
            } else {

            }
        } catch (e) {
            console.log(e)
        }
    }

    const defaultValues = {
        email: '',
        password: '',
        confirmPassword: ''
    }

    const {control, formState: {errors}, handleSubmit, reset} = useForm({defaultValues});

    const onSubmit = async (data) => {
        setFormData(data);
        setShowMessage(true);
        console.log(data);
        const response = await fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
        const datad = await response.json();
        console.log(datad);
        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text"
                                                                              autoFocus
                                                                              onClick={() => setShowMessage(false)}/>
    </div>;
    const passwordHeader = <h6>Pick a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider/>
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
                        Your account is registered under name <b>{formData.name}</b> ; it'll be valid next 30 days
                        without activation. Please check <b>{formData.email}</b> for activation instructions.
                    </p>
                </div>
            </Dialog>

            <div className="flex justify-content-center">
                <div className="card">
                    <h5 className="text-center">Register account</h5>
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
                                                <InputText id={field.name} {...field}
                                                           className={classNames({'p-invalid': fieldState.error})}/>
                                            )}/>
                                <label htmlFor="email"
                                       className={classNames({'p-error': !!errors.email})}>Email*</label>
                            </span>
                            {getFormErrorMessage('email')}
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                {/*TODO: FIX CONFIRMATION NOT TO BE FULL COMPLETE  TYPING PASSWORD*/}
                                <Controller name="password" control={control}
                                            rules={{required: 'Password is required.'}}
                                            render={({field, fieldState}) => (
                                                <Password id={field.name} {...field} toggleMask
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
                                <Controller name="password" control={control}
                                            rules={{required: 'Confirmation is required.'}}
                                            render={({field, fieldState}) => (
                                                <Password id={field.name} {...field} toggleMask
                                                          className={classNames({'p-invalid': fieldState.error})}
                                                          header={passwordHeader} footer={passwordFooter}/>
                                            )}/>
                                <label htmlFor="password"
                                       className={classNames({'p-error': errors.confirmPassword})}>Confirm password*</label>
                            </span>
                            {getFormErrorMessage('confirmation')}
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

                        {/*<Button name={"Register"} class={"register-button"}/> TODO: CHANGE BUTTON */}

                        <Button type="submit" label="Submit" className="mt-2"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
// ReactDOM.render(<CreateAccountForm/>, rootElement);