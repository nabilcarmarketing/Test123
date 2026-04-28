"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import HeaderMain from "@/components/HeaderMain";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Login fehlgesch lagen");
      console.log(error);
      return;
    }

    router.push("/admin");
  };

  return (
  <>
    <HeaderMain />

    <main></main>

    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <Card className="w-full max-w-md rounded-3xl shadow-sm border">
        <CardContent className="p-8 space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Nabil Car Admin
            </p>
            <h1 className="text-3xl font-bold mt-2">
              Admin Login
            </h1>
          </div>

          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@nabilcar.de"
            />
          </div>

          <div className="space-y-2">
            <Label>Passwort</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <Button
            onClick={login}
            className="w-full rounded-xl py-3 font-semibold"
          >
            Einloggen
          </Button>
        </CardContent>
      </Card>
     </main>
    </>
 );
}