import { Link } from "wouter";
import { Button } from "../../components/Button";
import { ColorList } from "../../components/ColorList";
import { useGetAllColorsQuery } from "./Overview.generated";
import { styled } from "styled-components";
import { Helmet } from "react-helmet-async";

export const Overview = () => {
  const { data, loading, error, fetchMore } = useGetAllColorsQuery({
    variables: {
      offset: 0,
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !data?.colors) {
    return <p>Error</p>;
  }
  return (
    <div>
      <Helmet>
        <title>Color Overview</title>
        <meta name="description" content="A giant Library of colors" />
      </Helmet>
      <h1>Color Overview</h1>
      <Link href="/add">
        <StyledButton>Add Color</StyledButton>
      </Link>
      <ColorList
        fetchMore={() => {
          fetchMore({
            variables: {
              offset: data?.colors?.length,
            },
          });
        }}
        colors={data.colors}
      />
    </div>
  );
};

const StyledButton = styled(Button)`
  margin-bottom: 1rem;
`;
