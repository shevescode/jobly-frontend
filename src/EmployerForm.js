import "./EmployerForm.css"
import {Controller, useForm} from "react-hook-form";
import {InputText} from "primereact/inputtext";
import {InputTextarea} from 'primereact/inputtextarea';
import {InputNumber} from 'primereact/inputnumber';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import React, {useState} from 'react';
import './CreateAccountForm.css';
import {useNavigate} from 'react-router-dom';
import {Button} from "primereact/button";

export const EmployerForm = () => {
    const navigate = useNavigate();
    const [showMessage, setShowMessage] = useState(false);
    // const [formData, setFormData] = useState({});

    const {handleSubmit, register, errors, reset} = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        // setFormData(data);
        setShowMessage(true);

        await fetch("http://localhost:5000/employer", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            credentials: "include",
            body: JSON.stringify({
                email: "wiktoria.rajba391@gmail.com",
                companyName: "wiku",
                industry: "wiku",
                position: "wiku",
                salary: 12,
                location: "wiku",
                workingTime: "wiku",
                photoSrc: "wiku",
                optionalRequirements: "wiku",
            })
        });

        setTimeout(function () {
            navigate("/");
        }, 1000);

        reset();
        // email: "wiktoria.rajba391@gmail.com",
        //     companyName: data.companyName,
        //     industry: data.industry,
        //     position: data.position,
        //     salary: data.salary,
        //     location: data.location,
        //     workingTime: data.workingTime,
        //     photoSrc: data.photoSrc,
        //     optionalRequirements: data.optionalRequirements,
    };

    const [value, setValue] = useState();

    return (
        <div className="create-employer-profile">
            <div className="flex justify-content-center">
                <div className="card">
                    <h5 className="text-center create-employer">Complete your Employer profile</h5>

                    <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                        <div className="field">
                            <span className="p-float-label ">
                                 <InputText name="companyName" />
                                <label htmlFor="companyName" className={"form-field"}>Company name*</label>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label ">
                                 <InputText name="industry"/>
                                <label htmlFor="companyName" className={"form-field"}>Industry*</label>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label ">
                                 <InputText name="position"/>
                                <label htmlFor="companyName" className={"form-field"}>Position*</label>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label ">
                                 <InputNumber inputId="salary" value={value}
                                              onValueChange={(e) => setValue(e.value)} showButtons mode="currency"
                                              currency="PLN"/>

                                <label htmlFor="salary" className={"form-field"}>Salary*</label>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label ">
                                 <InputText/>
                                <label htmlFor="companyName" className={"form-field"}>Location*</label>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label ">
                                 <InputText/>
                                <label htmlFor="companyName" className={"form-field"}>Working Time*</label>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label ">
                                 {/*<InputText type={"file"}/>*/}
                                <label htmlFor="photoSrc" className={"form-field"}>Workplace photo</label>
                                <InputText type={"file"}/></span>
                        </div>
                        <div className="field">
                            <span className="p-float-label ">
                                 <InputTextarea rows={3} cols={15}/>
                                <label htmlFor="requirements" className={"form-field"}>Optional requirements</label>
                            </span>
                        </div>
                        <Button type="submit" label="Create Employer profile" className="mt-2 create-employer-btn"/>
                    </form>
                </div>
            </div>

        </div>);

}
// export default EmployerForm;
