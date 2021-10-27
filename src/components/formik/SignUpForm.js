import React, { useRef, useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik'
import * as Yup from 'yup'

import './SignUpForm.scss'

const initialValues = {
    name: '',
    email: '',
    password: ''
}

function SignUpForm() {

    const [isVisible, setIsVisible] = useState(true)
    const passRef = useRef()

    const onSubmit = (values) => {
        console.log(values);
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is requierd'),
        email: Yup.string().email('Invalid email format').required('Email is requierd'),
        password: Yup.number().required('Password is requierd'),
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    const showPass = () => {
        if (isVisible) {
            passRef.current.type = "text"
            setIsVisible(false)
        }
        if (!isVisible) {
            passRef.current.type = "password"
            setIsVisible(true)
        }
    }

    return (
        <div className="signUpForm">
            <form onSubmit={formik.handleSubmit}>
                <div className="formControl">
                    <label>Name</label>
                    <br />
                    <input
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.name && formik.touched.name && (<p className="error">{formik.errors.name}</p>)}
                </div>

                <div className="formControl">
                    <label>Email</label>
                    <br />
                    <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.email && formik.touched.email && (<p className="error">{formik.errors.email}</p>)}
                </div>

                <div className="formControl">
                    <label>Password</label>
                    <br />
                    <input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        ref={passRef}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {isVisible ? <RemoveRedEyeIcon onClick={showPass} className="eye" /> : <VisibilityOffIcon onClick={showPass} className="eye" />}
                    {formik.errors.password && formik.touched.password && (<p className="error">{formik.errors.password}</p>)}
                </div>

                <div className="btnBox">
                    <button type="submit">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default SignUpForm
