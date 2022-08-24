import { useContext, useState } from 'react';
import { MainContext } from '../context/mainContext';

export const useForm = ( initialObject, validationsForm ) => {
    const { setData, setIsLogged } = useContext(MainContext);
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
                const rs = await fetch('http://localhost:4005/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: form.email, password: form.password })
                });
                const data = await rs.json();
                setIsLogged(true);
                setData(data);
            } catch (e) {
                console.log('error', e);
            }
            })();
        }
    };

    return { form, errors, handleChange, handleBlur, handleLogin }
};