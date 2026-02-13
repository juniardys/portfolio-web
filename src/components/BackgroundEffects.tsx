export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-900/20 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-[20%] right-[-5%] w-80 h-80 bg-blue-900/10 rounded-full blur-[80px] animate-float-delayed"></div>
      <div className="absolute top-[40%] left-[30%] w-64 h-64 bg-slate-800/20 rounded-full blur-[60px]"></div>
    </div>
  );
}
