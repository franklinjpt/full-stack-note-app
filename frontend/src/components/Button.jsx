export const Button = ({ text, onClick, color }) => {
  return (
    <button
      className={`bg-${color}-500 text-white p-2 rounded-md w-48 m-2`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
