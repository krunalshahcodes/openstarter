import RegisterForm from "@/components/auth/register-form";
import { getCurrentUser } from "@/lib/session";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@openstarter/ui";
import Link from "next/link";
import { redirect } from "next/navigation";

const Register = async () => {
  const user = await getCurrentUser();
  if (user) {
    return redirect("/");
  }

  return (
    <div className="flex min-h-screen items-center justify-center flex-col">
      <Card className="mx-auto max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
