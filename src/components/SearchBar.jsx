export default function SearchSection({ inputValue, setInputValue }) {
  return (
    <article className="w-full">
      <div className="bg-[#f0f0f0] p-[5px_15px] rounded-md">
        <input
          type="text"
          placeholder="🔎 Search..."
          className="w-full h-8 text-[18px] outline-none"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </article>
  );
}
