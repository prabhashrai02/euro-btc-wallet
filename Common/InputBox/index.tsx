import styles from "./inputBox.module.css";

const InputBox = (props: Props) => {
  const { maxLength, label, value, type, onChange, onKeyDownCheck } = props;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxLength) {
      if (e.target.value.length <= maxLength) onChange(e);
    } else {
      onChange(e);
    }
  };

  return (
    <div className={styles.inputBoxContainer}>
      <label> {label} </label>
      <input
        onChange={handleInput}
        value={value}
        type={type}
        onKeyDown={onKeyDownCheck}
      />
    </div>
  );
};


type Props = {
  maxLength?: number;
  label: string;
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDownCheck?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};


export default InputBox;
