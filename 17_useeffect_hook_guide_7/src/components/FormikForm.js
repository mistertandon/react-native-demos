import React, { Fragment, Component } from 'react';
import * as Yup from 'yup';
import { withFormik, Form, Field } from 'formik'

class FormikForm extends Component {

    constructor(props) {

        super(props);
    }

    render() {

        const { values, touched, errors, isSubmitting } = this.props

        return (
            <div>
                <Form>
                    <div>
                        {
                            touched.email &&
                            errors.email &&
                            (
                                <div>
                                    {
                                        errors.email
                                    }
                                </div>
                            )
                        }
                        <Field type="email" name="email" placeholder="Enter email" />
                    </div>
                    <div>
                        {
                            touched.password &&
                            errors.password &&
                            (
                                <div>
                                    {
                                        errors.password
                                    }
                                </div>
                            )
                        }
                        <Field type="text" name="password" placeholder="Enter password" />
                    </div>
                    <div>
                        {
                            touched.plan &&
                            errors.plan &&
                            (
                                <div>
                                    {
                                        errors.plan
                                    }
                                </div>
                            )
                        }
                        <Field component="select" name="plan" >
                            <option value="">Select Plan</option>
                            <option value="free">Free</option>
                            <option value="premium">Premium</option>
                        </Field>
                    </div>
                </Form>
            </div>
        )
    }

}
export default withFormik(
    {
        mapPropsToValues({ email, password, plan }) {

            return {

                email: email || '',
                password: password || '',
                plan: plan || ""
            }
        },
        validationSchema: Yup.object().shape(
            {
                email: Yup.string().email('Invalid email').required('Email is mandatory'),
                password: Yup.string().min(4, "Password must be 4 characters long").max(6, "Password must be less then 6 characters").required("Password is mandatory"),
                plan: Yup.string().required("Choose Plan")
            }
        )
    }
)(FormikForm)