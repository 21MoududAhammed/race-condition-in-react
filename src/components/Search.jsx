export default function Search({ setValue, value }) {
  return (
    <input
      className="max-w-96 mx-auto border-2 border-gray-900 rounded-lg px-2 py-2"
      type="text "
      placeholder="type here"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}
