import { useParams } from "react-router-dom";
import { useGetOnePersonDataQuery } from "../../store/store";
import { removeArraysFromObject } from "../../utils/RemoveArraysFromObject";
import TableComponent from "../../components/Table/TableComponent";
import { CardSkeletonPage } from "../../components/Skeleton";

const PeopleDetails = () => {
  const params = useParams<{ id: string }>();
  const { data, isLoading, isFetching } =
    useGetOnePersonDataQuery({
      id: params.id as string,
    });

  const filteredData = removeArraysFromObject(data as Record<string, any>);

  if (isLoading || isFetching) {
    return <CardSkeletonPage message="Loading Details, please wait....." />;
  }

  return (
    <div>
      <TableComponent data={filteredData} />
    </div>
  );
};

export default PeopleDetails;
