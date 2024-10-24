import React from 'react';
import useFormValidation from './Components/useFormValidation';


const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = 'Name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  return errors;
};

const App = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
  };

  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormValidation(initialState, validate);

  return (
    <div className="container" style={{width:"30%"}}>
      <h1>Form Validation Example</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        <button type="submit" className="btn btn-primary mx-2" style={{marginTop:"20px"}} disabled={isSubmitting}>
          Submit
        </button>
        <button type="button" className="btn btn-secondary" style={{marginTop:"20px"}} onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default App;
