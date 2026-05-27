// Middleware handles locale detection and redirect automatically.
// This file should never be reached in normal navigation.
import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/ru");
}
