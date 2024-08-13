import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(searchParams.get('name'));

  return <p>User {params.id}</p>;
};

export default UserDetail;
