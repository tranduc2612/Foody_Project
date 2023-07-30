import styles from "./Field.module.scss";
import classNames from "classnames/bind";
import { forwardRef, ChangeEvent } from "react";

const cx = classNames.bind(styles);

type TypeProps = {
  label: string;
  value: string | any;
  name: string;
  type: string;
  isValid: boolean | any;
  validMessage: string | any;
  placeholder?: string;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type TypeRef = HTMLElement;

function Field(
  {
    label,
    className = "",
    name,
    type,
    value,
    isValid,
    validMessage,
    placeholder,
    onChange,
    ...passProps
  }: TypeProps,
  ref: any
) {
  let validClass = "";

  if (isValid) {
    validClass = "error";
  } else {
    validClass = "";
  }

  return (
    <div className={cx("field-group")}>
      <label className={cx("label")} htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        className={cx("input", { [className]: true, [validClass]: true })}
        name={name}
        ref={ref}
        placeholder={placeholder}
        onChange={onChange}
        {...passProps}
      />
      <span className={cx("validation", { [validClass]: true })}>
        {validMessage}
      </span>
    </div>
  );
}

export default forwardRef<TypeRef, TypeProps>(Field);
