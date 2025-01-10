"use server";

import { signIn } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function signInUser(formData: FormData) {
  const phoneNumber = formData.get("phoneNumber");
  const password = formData.get("password");

  // check password and phoneNumber are not empty
  if (!password || !phoneNumber) {
    redirect("/auth/signIn");
    return null;
  }

  const status = await signIn("credentials", {
    phoneNumber,
    password,
    redirectTo: "/",
  });

  if (!status) {
    redirect("/auth/signIn");
    return null;
  } else {
    redirect("/");
  }
}
