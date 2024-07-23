import './Registration.css';
import bug from "../../assets/bug.jpg";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import {registrationSchema} from "../../schemas"

function Registration() {

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch("http://localhost:8000/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Formik.values),
        });
        console.log(response);

        Formik.resetForm();
      } catch (error) {
        console.log("register", error);
      }
    },

  });
  console.log(Formik.errors);

  return (
    <div className="container">
      <div className="inner-container">
        <div className="leftPart">
          <h2>Welcome!</h2>

          <form onSubmit={Formik.handleSubmit}>
            <div className="input-block">
              <label className="input-lable">Firstname</label>
              <br />
              <input
                className="input-field"
                type="string"
                name="firstname"
                autoComplete="off"
                required
                value={Formik.values.firstname}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                placeholder="firstname"
              />
              {Formik.errors.firstname && Formik.touched.firstname ? (<p className="form-error">{Formik.errors.firstname}</p>) : null}
            </div>

            <div className="input-block">
              <label className="input-lable">Lastname</label>
              <br />
              <input
                className="input-field"
                type="string"
                name="lastname"
                autoComplete="off"
                required
                value={Formik.values.lastname}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                placeholder="lastname"
              />
              {Formik.errors.lastname && Formik.touched.lastname ? (<p className="form-error">{Formik.errors.lastname}</p>) : null}
            </div>

            <div className="input-block">
              <label className="input-lable">Email</label>
              <br />
              <input
                className="input-field"
                type="email"
                required
                name="email"
                value={Formik.values.email}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                autoComplete="off"
                placeholder="email"
              />
              {Formik.errors.email && Formik.touched.email ? (<p className="form-error">{Formik.errors.email}</p>) : null}
            </div>

            <div className="input-block">
              <label className="input-lable">Password</label>
              <br />
              <input
                className="input-field"
                type="password"
                autoComplete="off"
                required
                name="password"
                value={Formik.values.password}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                placeholder="password"
              />
              {Formik.errors.password && Formik.touched.password ? (<p className="form-error">{Formik.errors.password}</p>) : null}
            </div>

            <div className="buttons">
              <button className="input-button" type="submit">
                Register
              </button>
            </div>
          </form>

          <p className="sign-in">
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>

        <div className="rightPart">
          <img
            src={bug}
            // src=""
            alt="coffee"
          />
        </div>
      </div>
    </div>
  );
}

export default Registration;
