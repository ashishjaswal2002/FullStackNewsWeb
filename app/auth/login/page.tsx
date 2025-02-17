"use client";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";

import { useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  FormItem,
  FormLabel,
  FormMessage,
  FormField,
  FormControl,
  Form,
} from "../../../components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "../../../components/form-error";
import { FormSuccess } from "../../../components/form-success";
import { login } from "@/actions/login";

export default function LoginForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>): any => {
    setError("");
    setSuccess("");
    startTransition(() => {
      login(values).then((data:any|undefined) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };
  return (
    <>
     <main className="flex bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 min-h-screen flex-col items-center justify-between p-24">
    
    
      <Form {...form}>
        <Card className="mx-auto max-w-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              🔐Login
            </CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="john.doe@exmaple.com"
                          type="email"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="123456"
                          type="password"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormError message={error} />
              <FormSuccess message={success} />

              <Button type="submit" className="w-full" disabled={isPending}>
                Login
              </Button>
            </form>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(() => {})}></form>

            <div className="mt-4 text-center text-sm">
              <p>Don&apos;t have an account?</p>

              <Link className="underline" href="/auth/register">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </Form>
      </main>
    </>
  );
}
