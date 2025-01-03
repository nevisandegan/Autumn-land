import { Suspense } from "react";

import CabinSkeleton from "../components/cabin-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CabinId from "../components/cabin-id";
import { notFound } from "next/navigation";
import Cabin from "@/app/_lib/models/cabin";
import connectDb from "@/app/_lib/connectDB";

export async function generateMetadata({ params }) {
  const data = await fetch(
    `http://localhost:3000/api/cabin/${params.cabinId}`,
    {
      cache: "no-store",
    }
  );

  const name = await data
    .json()
    .then((data) => data.data.name)
    .catch(() => {
      notFound();
    });

  return {
    title: `Cabin ${name}`,
  };
}

export async function generateStaticParams() {
  await connectDb();
  try {
    const cabins = await Cabin.find();
    return cabins.map((cabin) => ({
      cabinId: String(cabin.id),
    }));
  } catch (error) {
    console.log(error);
  }
}
export default async function Page({ params }) {
  const { cabinId } = params;

  return (
    <Suspense fallback={<CabinSkeleton />}>
      <CabinId cabinId={cabinId} />
    </Suspense>
  );
}
