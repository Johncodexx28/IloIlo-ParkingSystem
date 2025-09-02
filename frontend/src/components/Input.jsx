const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative mb-6 w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon className="w-5 h-5 text-red-400" />
      </div>
      <input
        {...props}
        className="w-full min-w-[400px] pl-10 pr-3 py-2 rounded-lg 
        bg-gray-200 outline-none focus:border-neutral-400 focus:ring-1 
        focus:ring-neutral-400 placeholder-gray-500 transition duration-200"
        required
      />
    </div>
  );
};

export default Input;
