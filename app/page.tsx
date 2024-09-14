import Image from "next/image";
import {Button} from "@/components/ui/button";
import {LoginButton} from "@/components/auth/login-button";

export default function Home() {
  return (
    <main
        className="flex h-full flex-col itmes-center justify-center
        bg-blue-500"
      >
        <div className="space-y-6 text-center">
            <h1 className="text-6xl font-semibold text-white drop-shadow-md">
                Auth
            </h1>
            <p className="text-white text-lg">
                A simple authentication service
            </p>
            <div>
                <LoginButton>
                    <Button variant="secondary" size="lg">
                        Sign IN
                    </Button>
                </LoginButton>

            </div>
        </div>
    </main>
  );
}
