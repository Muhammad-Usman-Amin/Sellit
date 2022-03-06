import { useFormikContext } from 'formik';
import React from 'react';
import AppButton from '../AppButton';

export default function SubmitButton({ style, title }) {

    const { handleSubmit } = useFormikContext();

    return (
        <AppButton style={style}
            title={title}
            onPress={handleSubmit}
        />
    );
}
