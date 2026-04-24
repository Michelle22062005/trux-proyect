export default function Loading() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-[#0a0a0a] font-sans">
            <div className="relative flex w-full max-w-[400px] flex-col gap-8 rounded-2xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold tracking-tight text-white">Cargando...</h1>
                    <p className="text-zinc-400">Por favor espera un momento</p>
                </div>
            </div>
        </div>
    );
}