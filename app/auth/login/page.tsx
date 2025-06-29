import { LoginForm } from "@/components/admin/LoginForm";
import Logo from "@/assets/logo.png";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex items-center justify-center">
          <Image src={Logo} alt="Kuagi Logo" width={100} height={100} />
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
