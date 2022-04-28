import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useRef,
  useState,
} from 'react';

interface IInput
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'onChange'
  > {
  onChange?: (value: string) => void;
}

const Input = (props: IInput) => {
  const { className, ...inputProps } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onFocus = () => {
    inputRef.current?.focus();
  };

  const onChange = (value: string) => {
    if (inputProps.onChange) inputProps.onChange(value);
  };

  const toggleFocus = () => {
    setIsFocused(!isFocused);
  };

  return (
    <div
      className={`bg-white py-2 px-5 flex justify-center items-center rounded-lg border-2 cursor-text ${
        isFocused ? 'border-cyan-400' : 'border-gray-200'
      } ${className}`}
      onClick={onFocus}
    >
      <input
        {...inputProps}
        ref={inputRef}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        className="w-full placeholder-gray-200"
        onChange={(e) => onChange(e.target.value)}
      ></input>
    </div>
  );
};

export default Input;
