import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import images from "~/assets/images";
import Field from "~/components/Field/Field";
import MyButton from "~/components/ButtonLink/Index";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const SignupSchema = Yup.object().shape({
  account: Yup.string()
    .max(50, "Quá kí tự !")
    .required("Không bỏ trống trường này !"),
  email: Yup.string()
    .email("Email không đúng định dạng !")
    .required("Không bỏ trống trường này !"),
  password: Yup.string()
    .max(50, "Quá kí tự !")
    .required("Không bỏ trống trường này !"),
  password2: Yup.string()
    .oneOf([Yup.ref("password")], "Mật khẩu không trùng khớp !")
    .required("Không bỏ trống trường này !"),
});

function Register() {
  return (
    <div className={"body__form-page"}>
      <div className={cx("box_form", { login__form: true })}>
        <div className={cx("form__header")}>
          <img className={cx("logo")} src={images.logo} />
          <div className={cx("title")}>
            <span className={cx("title__header")}>
              Your recipes are waiting
            </span>
            <span className={cx("title__sub")}>
              Connect to customize your recipe discovery.
            </span>
          </div>
        </div>
        <Formik
          initialValues={{
            account: "",
            email: "",
            password: "",
            password2: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={SignupSchema}
        >
          {({ values, errors, handleChange }) => (
            <Form className={cx("form__body")}>
              <Field
                validMessage={errors.account}
                isValid={errors.account}
                type="text"
                value={values.account}
                onChange={handleChange}
                label={"Tài khoản"}
                name={"account"}
                placeholder={"Nhập tài khoản..."}
              />

              <Field
                validMessage={errors.email}
                isValid={errors.email}
                type="text"
                value={values.email}
                onChange={handleChange}
                label={"Email"}
                name={"email"}
                placeholder={"Nhập email..."}
              />

              <Field
                validMessage={errors.password}
                isValid={errors.password}
                type="password"
                value={values.password}
                onChange={handleChange}
                label={"Mật khẩu"}
                name={"password"}
                placeholder={"Nhập mật khẩu..."}
              />

              <Field
                validMessage={errors.password2}
                isValid={errors.password2}
                type="password"
                value={values.password2}
                onChange={handleChange}
                label={"Nhập lại mật khẩu"}
                name={"password2"}
                placeholder={"Nhập lại mật khẩu..."}
              />

              <MyButton
                classNames={cx("custom-btn")}
                typeStyle="primary"
                content="Đăng kí"
                typeBtn="submit"
              />
            </Form>
          )}
        </Formik>
        <div className={cx("switch__page-auth")}>
          <span>Bạn đã có tài khoản ? Nhấn đây để </span>
          <Link to="/login">đăng nhập</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
