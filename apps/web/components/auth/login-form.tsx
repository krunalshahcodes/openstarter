"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@openstarter/ui";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { LuLoader } from "react-icons/lu";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { loginSchema, loginSchemaType } from "@/lib/schemas";

const LoginForm = () => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isPendingGoogle, setIsPendingGoogle] = useState<boolean>(false);
  const form = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const handleLogin = async (values: loginSchemaType) => {
    setIsPending(true);
    await signIn("credentials", { ...values, redirect: false }).then((res) => {
      setIsPending(false);

      if (!res) {
        toast.error("Something went wrong!!");
        return;
      }

      if (res.error) {
        toast.error(res.error || "Something went wrong!!");
        return;
      }

      router.push("/");
    });
  };

  const handleGoogleLogin = async () => {
    setIsPendingGoogle(true);
    await signIn("google");
  };

  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={form.handleSubmit(handleLogin)}>
        <FormField
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input required type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input required type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending && <LuLoader className="w-5 h-5 mr-2 animate-spin" />}
          <span>Login</span>
        </Button>
        <Button
          variant="outline"
          className="w-full"
          type="button"
          onClick={handleGoogleLogin}
          disabled={isPendingGoogle}
        >
          {isPendingGoogle && (
            <LuLoader className="w-5 h-5 mr-2 animate-spin" />
          )}
          <span>Login with Google</span>
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
