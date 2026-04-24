'use client';
import Image from "next/image";
import Link from "next/link";
import LoginForm from "./(auth)/login/page";
import RegisterForm from "./(auth)/register/page";

export default function Home() {
  return (
    <>
      <LoginForm />
      <RegisterForm />
    </>
  );
}
