import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { id } = await params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(id),
      getBookedDatesByCabinId(id),
    ]);

    return Response.json({ cabin, bookedDates });
  } catch (error) {
    return Response.json({ message: "Data not found" });
  }
}
