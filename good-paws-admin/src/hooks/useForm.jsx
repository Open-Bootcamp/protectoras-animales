import { useState } from 'react';

export const useForm = ( initialObject, validationsForm ) => {
    const [form, setForm] = useState(initialObject);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validationsForm(form));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setErrors(validationsForm(form));
        if (Object.keys(errors).length === 0) {
            (async () => {
            try {
                // const rs = await fetch(process.env.REACT_APP_LOGIN_URL, {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify({ email: email, password: password })
                // });
                // const data = await rs.json();
                // setIsLogged(data);
            } catch (e) {
                // setIsLogged({});
                console.log(e);
            }
            })();
        }
    };

    return { form, errors, handleChange, handleBlur, handleLogin }
};