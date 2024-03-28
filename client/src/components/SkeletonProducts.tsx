import Skeleton from "react-loading-skeleton";

export default function SkeletonProducts({
  numProductsToShow,
}: {
  numProductsToShow: number;
}) {
  return (
    <>
      <ul className="flex flex-wrap h-screen justify-center items-center gap-y-8 gap-x-2">
        {[...Array(numProductsToShow)].map((_, index) => (
          <li
            key={index}
            className="flex flex-col w-1/3 h-[400px] items-center gap-4 border rounded-md p-4 shadow-md bg-white text-black"
          >
            <Skeleton width={300} height={200} />
            <Skeleton width={200} height={20} />
            <Skeleton width={100} height={20} />
            <Skeleton width={150} height={35} />
          </li>
        ))}
      </ul>
    </>
  );
}
