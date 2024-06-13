export const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-green-500 text-white p-2 rounded-md w-1/4"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
