import { useAddColorMutation } from "./AddColor.generated";
import { ContentBox } from "../../components/ContentBox";
import { EditColor } from "../../components/EditColor";
import { toast } from "react-toastify";
import { navigate } from "wouter/use-location";
import { Helmet } from "react-helmet-async";
import {
  GetAllColorsDocument,
  GetAllColorsQuery,
} from "../Overview/Overview.generated";
export const AddColor = () => {
  const [addColorMutation] = useAddColorMutation({
    variables: {
      name: "test",
      value: "#000000",
    },
  });

  return (
    <div>
      <Helmet>
        <title>Add new Color</title>
        <meta name="description" content={`Add new color`} />
      </Helmet>
      <h1>Add Color</h1>
      <ContentBox>
        <EditColor
          submitColor={(color) => {
            addColorMutation({
              variables: {
                name: color.name,
                value: color.value,
              },
              update(cache, { data }) {
                if (data?.addColor?.id) {
                  const cacheData = cache.readQuery<GetAllColorsQuery>({
                    query: GetAllColorsDocument,
                  });
                  if (cacheData?.colors) {
                    cache.writeQuery({
                      query: GetAllColorsDocument,
                      data: {
                        colors: [...cacheData?.colors, data.addColor],
                      },
                    });
                  }
                }
              },
            }).then((res) => {
              toast(`${color.name} created`);
              navigate(`/`);
            });
          }}
        />
      </ContentBox>
    </div>
  );
};
