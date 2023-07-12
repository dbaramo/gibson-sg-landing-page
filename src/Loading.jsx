export default function Loading() {
  return (
    <div className="w-screen h-screen text-white flex flex-col gap-4 justify-center items-center">
      <img className="w-[30%] max-w-[300px]" src="gibson-logo.svg" />
      <div className="flex">
        <div className="loading__letter">L</div>
        <div className="loading__letter">o</div>
        <div className="loading__letter">a</div>
        <div className="loading__letter">d</div>
        <div className="loading__letter">i</div>
        <div className="loading__letter">n</div>
        <div className="loading__letter">g</div>
        <div className="loading__letter">.</div>
        <div className="loading__letter">.</div>
        <div className="loading__letter">.</div>
      </div>
    </div>
  );
}
