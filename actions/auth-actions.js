"use server";

import { createAuthSession, destroySession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUserByEmail } from "@/lib/user";
import { redirect } from "next/navigation";

export async function signup(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  let errors = {};
  if (!email.includes("@")) {
    errors.email = "please enter a valide email";
  }
  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters";
  }
  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  //hashing password
  const hashPassord = hashUserPassword(password);
  // store in the database
  try {
    const id = createUser(email, hashPassord);
    await createAuthSession(id);
    redirect("/threats");
  } catch (error) {
    if (error.code === "SQLITE-CONSTRAINT-UNIQUE") {
      return {
        errors: {
          email:
            "It seems like an account for the chosen email already exist! ",
        },
      };
    }
    throw error;
  }
}

export async function login(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const existingUser = await getUserByEmail(email);
  if (!existingUser) {
    return {
      errors: {
        email: "Could not authenticate the user! please check your credentials",
      },
    };
  }
  const isValidPassword = verifyPassword(existingUser.password, password);
  if (!isValidPassword) {
    return {
      errors: {
        password:
          "Could not authenticate the user! please check your credentials",
      },
    };
  }
  await createAuthSession(existingUser.id);
  redirect("/threats");
}

export async function auth(mode, prevState, formData) {
  if (mode === "login") {
    return login(prevState, formData);
  }
  return signup(prevState, formData);
}

export async function logOut() {
  await destroySession();
  redirect("/");
}
