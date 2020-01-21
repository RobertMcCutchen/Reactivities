import React from 'react';
import {Form as FinalForm, Field} from 'react-final-form';
import { Form } from 'semantic-ui-react';
import TextInput from '../../app/common/form/TextInput';

export const LoginForm = () => {
    return (
        <FinalForm 
            onSubmit={(values) => console.log(values)}
            render={({handleSubmit}) => (
                <Form>
                    <Field 
                        name='email'
                        component={TextInput}
                        placeholder='Email'
                    />
                </Form>
            )}
        />
    )
}

export default LoginForm