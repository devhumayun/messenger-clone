import "./Auth.scss";
import { Link } from "react-router-dom";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import PageHeader from "../../components/PageHeader/PageHeader";
import useFormFields from "../../hooks/useFormFields";
import { useDispatch } from "react-redux";
import { createUser } from "../../features/auth/authApiSlice";

const Register = () => {
  // hooks
  const dispatch = useDispatch();

  // form field manage
  const { input, handleInputChange, resetForm } = useFormFields({
    name: "",
    auth: "",
    password: "",
  });

  // handle user registewr
  const handelUserRegister = (e) => {
    e.preventDefault();

    dispatch(createUser(input));

    resetForm();
  };

  return (
    <>
      <PageHeader title="Create you account" />
      <div className="auth-container">
        <div className="auth-wraper">
          <div className="auth-top">
            <AuthHeader
              title="Create you account"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci  "
            />

            <div className="auth-form">
              <form onSubmit={handelUserRegister}>
                <input
                  type="text"
                  placeholder="Your name"
                  value={input.name}
                  name="name"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Email or Phone number"
                  value={input.auth}
                  name="auth"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Password"
                  value={input.password}
                  name="password"
                  onChange={handleInputChange}
                />
                <button className="bg-fb-green">Log In</button>
              </form>
            </div>
          </div>
          <div className="auth-bottom">
            <Link to="/login">Log In Now</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
