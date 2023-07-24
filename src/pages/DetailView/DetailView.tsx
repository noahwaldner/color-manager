import { useRoute } from "wouter";
import {
  useGetColorQuery,
  useEditColorMutation,
  useRemoveColorMutation,
} from "./SingleColor.generated";
import { EditColor } from "../../components/EditColor";
import { Lightbox } from "../../components/Lightbox";
import { useState } from "react";
import { toast } from "react-toastify";
import { ContentBox } from "../../components/ContentBox/ContentBox";
import DeleteForever from "./icons/delete-forever";
import { styled } from "styled-components";
import { navigate } from "wouter/use-location";
import { Helmet } from "react-helmet-async";

export const DetailView = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, params] = useRoute("/color/:id");
  const [requestDelete, setRequestDelete] = useState<boolean>(false);
  const [updateColor] = useEditColorMutation({});
  const [removeColor] = useRemoveColorMutation({});

  const { data, loading, error } = useGetColorQuery({
    variables: {
      id: parseInt(params?.id || ""),
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !data!?.color) {
    return <p>Error</p>;
  }

  const { color } = data;

  return (
    <div>
      <Helmet>
        <title>Modify Color {color.name}</title>
        <meta
          name="description"
          content={`Modify properties of ${color.name}`}
        />
      </Helmet>
      <Lightbox
        text="Are you sure you want to delete this color?"
        visible={requestDelete}
        onConfirm={() => {
          removeColor({
            variables: {
              id: color.id,
            },
            update(cache, { data }) {
              if (data?.removeColor?.success) {
                cache.evict({ id: cache.identify(color) });
              }
            },
          }).then(() => {
            setRequestDelete(false);
            toast(`${color.name} deleted`);
            navigate("/");
          });
        }}
        onCancel={() => {
          setRequestDelete(false);
        }}
      />
      <h1>Color: {data.color?.name}</h1>
      <ContentBox>
        <DeleteColor
          onClick={() => {
            setRequestDelete(true);
          }}
        >
          <DeleteForever strokewidth={3} width={30} height={30} />
        </DeleteColor>
        <EditColor
          submitColor={(color) => {
            updateColor({
              variables: {
                id: data.color?.id || 0,
                name: color.name,
                value: color.value,
              },
            }).then(() => {
              toast(`${color.name} updated`);
              navigate("/");
            });
          }}
          color={data.color}
        />
      </ContentBox>
    </div>
  );
};

const DeleteColor = styled.button`
  grid-column: 3 / 4;
  justify-self: end;
  grid-row: 1;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  color: var(--white);
  background-color: transparent;
  margin: 1rem;
  border: none;
`;
