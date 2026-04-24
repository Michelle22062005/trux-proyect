'use client'
import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-black overflow-hidden relative">
            <div className="relative flex w-full max-w-[400px] flex-col gap-8 rounded-2xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
                        <span className="text-3xl">⚠️</span>
                    </div>
                    <h1 className="text-3xl font-black text-white tracking-tighter mb-2">Error Inesperado</h1>
                    <p className="text-zinc-400 mb-6">Hubo un problema al iniciar sesión</p>
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6 text-left">
                        <p className="text-red-300 text-sm font-mono">{error.message}</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => reset()}
                            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]"
                        >
                            Reintentar
                        </button>
                        <Link
                            href="/register"
                            className="w-full bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl font-bold transition-all active:scale-[0.98] text-center"
                        >
                            Crear Cuenta
                        </Link>
                    </div>
                </div>
                <p className="text-center mt-6 text-sm text-gray-500 font-light">
                    &copy; 2026 RIWI .IA - Potenciado por Agentes
                </p>
            </div>
        </div>
    );
}