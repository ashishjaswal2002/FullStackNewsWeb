"use client";
import * as z from "zod";
import Link from "next/link";
import { RegisterSchema } from "@/schemas";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";

import { useState, useTransition } from "react";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";


import { zodResolver } from "@hookform/resolvers/zod";

import { register} from "@/actions/register";
import { FormItem,Form,FormField,FormLabel,FormControl,FormMessage } from "../ui/form";
import { FormSuccess } from "../form-success";
import { FormError } from "../form-error";

export default function RegisterForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name:"",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>): any => {
    setError("");
    setSuccess("");
    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };
  return (
    <>
      <Form {...form}>
        <Card className="mx-auto max-w-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              🔓Register
            </CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
              <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="John Doe"
                         
                        
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
              <FormSuccess message={success}/>
             
             {success &&    <Link  href="/auth/login" className="text-center">
                <Button className="mt-2 mx-auto w-full">Go back to Login</Button>
              </Link>}
              
            {!success &&  <Button type="submit" className="w-full" disabled={isPending}>
              Create an account
              </Button>}
            </form>
          </CardHeader>
          <CardContent>


     
          </CardContent>
        </Card>
      </Form>
    </>
  );
}
