import LoginForm from "@/components/auth/login-form";
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

const Login = async () => {
  const user = await getCurrentUser();
  if (user) {
    return redirect("/");
  }

  return (
    <div className="flex min-h-screen items-center justify-center flex-col">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
