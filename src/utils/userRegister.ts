import { FormEvent } from "react";
import { Router } from "next/router";
import { toast } from "@/hooks/use-toast";

export const userRegister = async (
  event: FormEvent<HTMLFormElement>,
  router: Router
) => {
  event.preventDefault();

  try {
    const formData = new FormData(event.currentTarget);
    const userInfo = Object.fromEntries(formData.entries());
    const response = await fetch("/api/userRegister", {
      method: "POST",
      headers: {},
      body: JSON.stringify(userInfo),
    });
    const data = await response.json();
    if (response.status === 200) {
      toast({
        variant: "success",
        title: data.message,
      });

      setTimeout(() => {
        router.push("/auth/signIn");
      }, 3000);
    } else if (response.status === 409) {
      toast({
        variant: "danger",
        title: data.message,
      });
    } else {
      toast({
        variant: "destructive",
        title: data.message,
      });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }
};
