'use client'

import Link from "next/link";

export default function Main() {
    return (
        <>
            <title>Next.js 모아모아 | WOOJINNY</title>
            
            <main className="h-screen flex flex-col justify-center items-center text-center">
                <h1>Next.js 로 만들어본것들 모아모아🤗</h1>
                <h3 className="mt-2 mb-6">^_______^v</h3>
                <Link href={'/project/send-message'} className="hover:text-[color:var(--BL-500,#008BFF)]">Send Message Demo✉️</Link>
            </main>
        </>
    );
}