import Link from "next/link";
import LoginForm from "@/src/componets/auth/LoginForm";

export default function LoginPage() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-[#0b1326] font-sans font-bold text-xs uppercase tracking-[0.2em]">
            <div className="relative flex w-full max-w-[400px] flex-col gap-8 rounded-2xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold tracking-tight text-white">Bienvenido</h1>
                    <p className="text-zinc-400">Ingresa tus credenciales para continuar</p>
                </div>
                <LoginForm />

                <div className="flex justify-center text-sm text-zinc-400">
                    ¿No tienes una cuenta?

                    <Link href="/register" className="ml-1 font-medium text-white hover:underline">Regístrate</Link>
                </div>
            </div>
        </div>
    );

}