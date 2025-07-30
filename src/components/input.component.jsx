const InputBox = ({ name, type, id, value, plaesholder , icon}) => {
  return (
    <div className="relative mb-4 w-[100%]">
      <input
        name={name}
        type={type}
        id={id}
        defaultValue={value}
        placeholder={plaesholder}
        className="input-box"
      />

      <i className={"fi " + icon + " input-icon"}></i>
    </div>
  );
};
export default InputBox;
