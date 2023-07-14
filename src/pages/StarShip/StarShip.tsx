import { useState, useEffect } from "react";
import CardSkeletonPage from "../../components/Skeleton/CardSkeletonPage";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";
import { gradientBlueTextStyles } from "../../components/Text/GradientText";
import { nanoid } from "nanoid";
import { useGetAllStarShipDataQuery } from "../../store/store";
import { StarShipCard } from "../../components/Cards";

const StarShip = () => {
  const [pageData, setPageData] = useState({
    currentPage: 1,
    totalPages: 1,
  });

  const { data, isLoading, isFetching } =
    useGetAllStarShipDataQuery({
      page: pageData.currentPage,
    });

  console.log(data);

  useEffect(() => {
    if (data) {
      setPageData({
        ...pageData,
        totalPages: Math.ceil(data.count / 10),
      });
    }
  }, [data]);

  if (isLoading || isFetching) {
    return (
      <CardSkeletonPage message="Loading Species Data, please Wait....." />
    );
  }
  return (
    <>
      <h1
        className={`text-3xl font-semibold text-center mb-5 ${gradientBlueTextStyles}`}
      >
        Star Wars Vehicles
      </h1>

      <PaginationComponent
        count={pageData.totalPages}
        currentPage={pageData.currentPage}
        onChange={(_: any, page: number) =>
          setPageData({
            ...pageData,
            currentPage: page,
          })
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.results.map((starShip) => (
          <StarShipCard key={nanoid()} {...starShip} />
        ))}
      </div>
    </>
  );
};

export default StarShip;
