import { useState, useEffect } from "react";
import { useGetAllPeopleDataQuery } from "../../store/store";
import { PeopleCard } from "../../components/Cards";
import { nanoid } from "nanoid";
import { IPeople } from "swapi-ts";
import { CardSkeletonPage } from "../../components/Skeleton/index";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";
import { gradientBlueTextStyles } from "../../components/Text/GradientText";

const People = () => {
  const [pageData, setPageData] = useState({
    currentPage: 1,
    totalPages: 1,
  });

  const { data, isLoading, isError, isFetching, status } =
    useGetAllPeopleDataQuery({
      page: pageData.currentPage,
    });

  useEffect(() => {
    if (data) {
      setPageData({
        ...pageData,
        totalPages: Math.ceil(data.count / 10),
      });
    }
  }, [data]);

  if (isLoading || isFetching)
    return <CardSkeletonPage message="Loading People Data, please Wait....." />;

  return (
    <>
      <h1
        className={`text-3xl font-semibold text-center mb-5 ${gradientBlueTextStyles}`}
      >
        Star Wars Characters
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
        {data?.results.map((people: IPeople) => (
          <PeopleCard key={nanoid()} {...people} />
        ))}
      </div>
    </>
  );
};

export default People;
