function Spinner({ LoadingText = "Loading Page...", screen, className }) {
  return (
    <div className={`${screen} ${className} flex justify-center items-center`}>
      <div>
        <div className="spinner mb-2"></div>
        <span className="text-lg font-medium">{LoadingText}</span>
      </div>
    </div>
  );
}

export default Spinner;
