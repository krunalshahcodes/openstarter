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
import { registerSchema, registerSchemaType } from "@/lib/schemas";
import { useRegister } from "@/lib/actions/auth";

const RegisterForm = () => {
  const [isPendingGoogle, setIsPendingGoogle] = useState<boolean>(false);
  const form = useForm<registerSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const { mutate: register, isPending } = useRegister();

  const handleRegister = async (values: registerSchemaType) =>
    register(values, {
      onSuccess: (res) => {
        toast.success(res?.data?.message);
        router.push("/login");
      },
      onError: (err: any) => {
        toast.error(err?.response?.data?.message || "Something went wrong!!");
      },
    });

  const handleGoogleLogin = async () => {
    setIsPendingGoogle(true);
    await signIn("google");
  };

  return (
    <Form {...form}>
      <form
        className="grid gap-4 max-w-xl"
        onSubmit={form.handleSubmit(handleRegister)}
      >
        <FormField
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
          <span>Create an account</span>
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
          <span>Sign up with Google</span>
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
