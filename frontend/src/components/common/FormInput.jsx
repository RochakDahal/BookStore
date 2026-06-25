const FormInput = ({ label, type = "text", name, value, onChange, placeholder, required = false, icon: Icon }) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`${Icon ? 'pl-10' : 'pl-4'} w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition bg-white`}
        />
      </div>
    </div>
  );
};

export default FormInput;