"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import supabase from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function createReservation(bookingData, formData) {
  const session = await auth();

  if (!session) throw new Error("You must be logged in");

  const guest_id = session.user.id;
  const num_guests = formData.get("num_guests");
  const observations = formData.get("observations");

  // console.log("BOOKING DATA: ", bookingData.start_date);

  // return;

  const inputData = {
    guest_id,
    num_guests,
    observations,
    ...bookingData,
  };

  const { data, error } = await supabase.from("bookings").insert([inputData]);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be created");
  }

  revalidatePath("/account/reservations");
  redirect("/thank-you");
}

export async function createRating(otherData, formData) {
  const session = await auth();

  if (!session) throw new Error("You must be logged in");

  const comment = formData.get("comment");

  const inputData = {
    ...otherData,
    comment,
    guest_id: session.user.id,
  };

  const { data, error } = await supabase.from("ratings").insert([inputData]);

  if (error) {
    console.error(error);
    throw new Error("Rating could not be created");
  }

  revalidatePath(`/cabins/rate/${inputData.cabin_id}`);
}

export async function updateProfile(formData) {
  const session = await auth();

  if (!session) throw new Error("You must be logged in");

  const national_id = formData.get("national_id");
  const nationality = formData.get("nationality");

  if (national_id) {
    if (!/^\d{6,12}$/.test(national_id))
      throw new Error("Please put a valid national id number");
  }

  const updateData = {
    national_id,
    nationality,
  };

  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.id);

  if (error) {
    console.error(error);
    throw new Error("Guest could not be updated");
  }

  revalidatePath("/account/profile");
}

export async function updateReservation(formData) {
  const session = await auth();

  if (!session) throw new Error("You must be logged in");

  const guestBookings = await getBookings(session.user.id);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  const num_guests = formData.get("num_guests");
  const observations = formData.get("observations");
  const id = Number(formData.get("id"));

  if (!guestBookingIds.includes(id))
    throw new Error(
      "The booking that you are attempting to update is not allowed"
    );

  const updatedFields = {
    num_guests,
    observations,
  };

  const { data, error } = await supabase
    .from("bookings")
    .update(updatedFields)
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }

  revalidatePath(`/account/reservations/${id}`);
  redirect("/account/reservations");
}

export async function deleteReservation(id) {
  const session = await auth();

  if (!session) throw new Error("You must be logged in");

  const guestBookings = await getBookings(session.user.id);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(id))
    throw new Error(
      "The booking that you are attempting to delete is not allowed"
    );

  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }

  revalidatePath("/account/reservations");
}
