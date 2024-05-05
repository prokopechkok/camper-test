import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import s from './Booking.module.css';

const Booking = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    date: Yup.date().required('Booking date is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    localStorage.setItem('formData', JSON.stringify(values));
    setSubmitting(false);
    window.location.reload();
  };
  return (
    <div className={s.container}>
      <h3 className={s.title}>Book your campervan now</h3>
      <p className={s.text}>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={{
          name: '',
          email: '',
          date: '',
          comment: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <Field
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
            <Field
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <Field
              type="date"
              name="date"
              id="date"
              placeholder="Booking date"
              className={s.dateInput}
              required
            />
            <Field
              as="textarea"
              name="comment"
              id="comment"
              placeholder="Comment"
            ></Field>
            <button type="submit" disabled={isSubmitting} className={s.sendBtn}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Booking;
