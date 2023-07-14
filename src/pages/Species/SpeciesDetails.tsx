import { useParams } from "react-router-dom";
import { removeArraysFromObject } from "../../utils/RemoveArraysFromObject";
import TableComponent from "../../components/Table/TableComponent";
import { CardSkeletonPage } from "../../components/Skeleton";
import { useGetOneSpeciesDataQuery } from "../../store/store";

const SpeciesDetails = () => {
  const params = useParams<{ id: string }>();
  const { data, isLoading, isFetching } =
    useGetOneSpeciesDataQuery({
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

export default SpeciesDetails;
