import "./EmployerForm.css"
import {Controller, useForm} from "react-hook-form";
import {InputText} from "primereact/inputtext";
import {classNames} from 'primereact/utils';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import React, {useRef, useState} from 'react';
import './CreateAccountForm.css';
import {useNavigate} from 'react-router-dom';
import {Button} from "primereact/button";
import {FileUpload} from "primereact/fileupload";
import Header from "./Header";

export const EmployerForm = () => {
    const toast = useRef(null);
    const navigate = useNavigate();
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const defaultValues = {
        companyName: '',
        industry: '',
        position: '',
        salary: 0,
        location: '',
        workingTime: '',
        photoSrc: '',
        optionalRequirements: '',
    }
    const {handleSubmit, formState: {errors}, control, reset} = useForm({defaultValues});
    const onBasicUpload = () => {
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
    }

    const onSubmit = async (data) => {
        console.log(data);
        // setFormData(data);
        setShowMessage(true);

        await fetch("http://localhost:5000/employer", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            credentials: "include",
            body: JSON.stringify({
                companyName: data.companyName,
                industry: data.industry,
                position: data.position,
                salary: data.salary,
                location: data.location,
                workingTime: data.workingTime,
                photoSrc: data.photoSrc,
                optionalRequirements: data.optionalRequirements,
            })
        });

        setTimeout(function () {
            navigate("/");
        }, 1000);

        reset();
    };

    return (
        <div className="create-employer-profile">
            <div className="flex justify-content-center">
                <div className="card">
                    <Header headerContent="Complete your Employer profile " className="text-center create-employer"/>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                        <div className="field">
                            <span className="p-float-label ">
                                <Controller name="companyName" control={control}
                                            rules={{required: 'Company name is required.'}}
                                            render={({field, fieldState}) => (
                                                <InputText id={field.companyName} {...field} autoFocus
                                                           className={classNames({'p-invalid': fieldState.invalid})}/>
                                            )}/>
                                <label htmlFor="companyName" className={"form-field"}>Company name*</label>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label ">
                                <Controller name="industry" control={control}
                                            rules={{required: 'Industry to your company is required.'}}
                                            render={({field, fieldState}) => (
                                                <InputText id={field.industry} {...field} autoFocus
                                                           className={classNames({'p-invalid': fieldState.invalid})}/>
                                            )}/>
                                <label htmlFor="industry" className={"form-field"}>Industry*</label>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label ">
                                 <Controller name="position" control={control}
                                             rules={{required: 'Position is required.'}}
                                             render={({field, fieldState}) => (
                                                 <InputText id={field.position} {...field} autoFocus
                                                            className={classNames({'p-invalid': fieldState.invalid})}/>
                                             )}/>
                                <label htmlFor="position" className={"form-field"}>Position*</label>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label ">
                                 <Controller name="salary" control={control} rules={{required: 'Position is required.'}}
                                             render={({field, fieldState}) => (
                                                 <InputText id={field.salary} {...field} autoFocus
                                                            className={classNames({'p-invalid': fieldState.invalid})}/>
                                             )}/>
                                <label htmlFor="salary" className={"form-field"}>Salary*</label>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label ">
                                 <Controller name="location" control={control}
                                             rules={{required: 'Location is required.'}}
                                             render={({field, fieldState}) => (
                                                 <InputText id={field.location} {...field} autoFocus
                                                            className={classNames({'p-invalid': fieldState.invalid})}/>
                                             )}/>
                                <label htmlFor="location" className={"form-field"}>Location*</label>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label ">
                                 <Controller name="workingTime" control={control}
                                             rules={{required: 'Working time is required.'}}
                                             render={({field, fieldState}) => (
                                                 <InputText id={field.workingTime} {...field} autoFocus
                                                            className={classNames({'p-invalid': fieldState.invalid})}/>
                                             )}/>
                                <label htmlFor="workingTime" className={"form-field"}>Working time (in hours) *</label>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label ">
                                 <Controller name="photoSrc" control={control}
                                             render={({field, fieldState}) => (
                                                 <InputText id={field.photoSrc} {...field} autoFocus
                                                            className={classNames({'p-invalid': fieldState.invalid})}/>
                                             )}/>
                                <label htmlFor="photoSrc" className={"form-field"}>Photo *</label>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label ">
                                 <Controller name="optionalRequirements" control={control}
                                             render={({field, fieldState}) => (
                                                 <InputText id={field.optionalRequirements} {...field} autoFocus
                                                            className={classNames({'p-invalid': fieldState.invalid})}/>
                                             )}/>
                                <label htmlFor="optionalRequirements"
                                       className={"form-field"}>Optional requirements *</label>
                            </span>
                        </div>
                        <FileUpload mode="basic" name="demo[]"
                                    url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*"
                                    maxFileSize={1000000} onUpload={onBasicUpload}/>

                        <Button type="submit" label="Create Employer profile" className="mt-2 create-employer-btn"/>
                    </form>
                </div>
            </div>

        </div>);

}
