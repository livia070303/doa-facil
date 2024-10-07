import PropTypes from 'prop-types';

const CheckboxInput = ({ disabled, defaultChecked, id, label }) => (
  <div className="w-full flex gap-2">
    <input
      className="
        peer relative appearance-none shrink-0 w-5 h-5 border-2 flex items-center justify-center border-blue-200 rounded-full mt-0.5 bg-white
        focus:outline-none focus:ring-offset-0 focus:ring-1  focus:ring-blue-100
        checked:bg-blue-500 checked:border-0
        disabled:border-steel-400 disabled:bg-steel-400
      "
      type="checkbox"
      id={id}
      defaultChecked={defaultChecked}
      disabled={disabled}
    />
    <div className='absolute  border bg-white rounded-full'/>
    <label htmlFor={id}>
      {label}
    </label>
  </div>
);

CheckboxInput.propTypes = {
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default CheckboxInput;