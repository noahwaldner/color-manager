import { styled } from "styled-components";
import { ColorPreview } from "../ColorPreview/ColorPreview";
import { FunctionComponent, useMemo } from "react";
import { GetAllColorsQuery } from "../../pages/Overview/Overview.generated";
import { Button } from "../Button";
import { BasicColorInfoWithIdFragment } from "../../gql/Color.generated";
import { cardStyle } from "../../style/styleMixins";

interface IColorListProps {
  colors: GetAllColorsQuery["colors"];
  fetchMore: () => void;
}
export const ColorList: FunctionComponent<IColorListProps> = ({
  colors,
  fetchMore,
}) => {
  const sortedColors = useMemo(() => {
    return (colors || [])
      .slice()
      .filter(
        (color): color is BasicColorInfoWithIdFragment => color?.id != null,
      )
      .sort((a, b) => b.id - a.id)
      .map((color: BasicColorInfoWithIdFragment) => (
        <ColorPreview
          key={color.id}
          detailLink={`/color/${color.id}`}
          color={color}
        />
      ));
  }, [colors]);
  return (
    <ColorListContainer>
      {sortedColors.length > 0
        ? sortedColors
        : "...and the earth was without colors, and void..."}
      <LoadMore
        onClick={() => {
          fetchMore();
        }}
      >
        Load More
      </LoadMore>
    </ColorListContainer>
  );
};

const ColorListContainer = styled.div`
  background-color: var(--primary-background);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  align-items: center;
  padding: 1rem;
  ${cardStyle}
`;

const LoadMore = styled(Button)`
  background-color: var(--primary-highlight);
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 700;
  color: var(--primary-highlightText);
  cursor: pointer;
  grid-column: 1 / -1;
`;
