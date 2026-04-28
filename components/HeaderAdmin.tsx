"use client";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";

export default function HeaderAdmin() {
  const router = useRouter();

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 text-black">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-red-600">
            Nabil Car
          </h1>

          <p className="text-xs md:text-sm tracking-[0.35em] md:tracking-[0.4em] text-gray-500 uppercase">
            Admin Panel
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Button
            onClick={logout}
            variant="outline"
            className="rounded-xl px-4 md:px-6 py-2.5 md:py-3 font-semibold"
          >
            Logout
          </Button>
        </div>
      </nav>
    </header>
  );
}
