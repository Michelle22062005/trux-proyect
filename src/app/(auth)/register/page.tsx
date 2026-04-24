import Link from "next/link";
import RegisterForm from "@/src/componets/auth/RegisterForm";


export default function RegisterPage() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-[#0b1326] font-sans font-bold text-xs uppercase tracking-[0.2em] py-12">
            <div className="relative flex w-full max-w-[440px] flex-col gap-8 rounded-2xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-white">Crea tu cuenta</h1>
                    <p className="text-zinc-400">Únete para empezar a usar embeddings</p>
                </div>
                <RegisterForm />
                <div className="flex justify-center text-sm text-zinc-400">
                    <span className="font-size-0.8rem">¿Ya tienes una cuenta?<Link href="/login" className="ml-1 font-medium hover:underline font-bold text-violet-500">Inicia sesión</Link></span>
                </div>
            </div>
        </div>
    );
}