import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { EventFormValues } from "../../shared/types/FormTypes";
import { addYears, isPast } from "date-fns"

const initialValues: EventFormValues = {
    eventName: "",
    eventDate: "",
    eventStart: "",
    eventEnd: "",
}

const eventFormValidation = (values: EventFormValues) => {
    const errors: Partial<typeof values> = {};

    if (!values.eventName) {
        errors.eventName = "Required!";
    }
    else if (values.eventName.length > 30) {
        errors.eventName = "Must be less than 30 characters long!";
    }

    if (!values.eventDate) {
        errors.eventDate = "Required!";
    }
    else if (isPast(new Date(values.eventDate))) {
        errors.eventDate = "Event should not take place in past!";
    }
    else if (new Date(values.eventDate) >= addYears(new Date(), 2)) {
        errors.eventDate = "Planning event two years in advance is nonsense!";
    }


    if (!values.eventStart) {
        errors.eventStart = "Required!";
    } else if (values.eventStart < "09:00") {
        errors.eventStart = "Minimum start time - 09:00!";
    }

    if (!values.eventEnd) {
        errors.eventEnd = "Required!";
    }
    else if (values.eventEnd > "18:00") {
        errors.eventEnd = "Maximum end time - 18:00!";
    }
    else if (values.eventStart && values.eventStart >= values.eventEnd) {
        errors.eventEnd = "End time must be bigger than start time!";
    }


    return errors;
}

export const AddEventForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            validate={eventFormValidation}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
            }}
        >
            <Form>
                <label htmlFor="eventName">Название</label>
                <Field name="eventName" type="text" autoComplete="off" />
                <ErrorMessage name="eventName" />

                <label htmlFor="eventDate">Дата</label>
                <Field name="eventDate" type="date" />
                <ErrorMessage name="eventDate" />

                <label htmlFor="eventStart">Время начала</label>
                <Field name="eventStart" type="time" />
                <ErrorMessage name="eventStart" />

                <label htmlFor="eventEnd">Время конца</label>
                <Field name="eventEnd" type="time" />
                <ErrorMessage name="eventEnd" />

                <button type="submit">Добавить</button>
            </Form>
        </Formik>
    )
}