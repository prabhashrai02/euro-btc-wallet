import styles from "./inputBox.module.css";

const InputBox = (props: Props) => {
  const { customClass, maxLength, label, value, type, readOnly, onChange, onKeyDownCheck } = props;

  const style = customClass ?? '';

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxLength) {
      if (e.target.value.length <= maxLength) onChange(e);
    } else {
      onChange(e);
    }
  };

  return (
    <div className={`${style} ${styles.inputBoxContainer}`}>
      <label> {label} </label>
      <input
        readOnly={readOnly}
        onChange={handleInput}
        value={value}
        type={type}
        onKeyDown={onKeyDownCheck}
      />
    </div>
  );
};


type Props = {
  label: string;
  type: string;
  readOnly?: boolean;
  maxLength?: number;
  customClass?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDownCheck?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};


export default InputBox;
