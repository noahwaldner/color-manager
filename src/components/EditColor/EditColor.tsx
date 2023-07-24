import { styled } from "styled-components";
import { ColorPreview } from "../ColorPreview/ColorPreview";
import { FunctionComponent, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Button } from "../Button";
import { cardStyle } from "../../style/styleMixins";

interface IColorEditableProps {
  name: string;
  value: string;
}

interface IColorListProps {
  color?: IColorEditableProps;
  submitColor: (color: IColorEditableProps) => void;
}
export const EditColor: FunctionComponent<IColorListProps> = ({
  color = {
    name: "My awesome new Color",
    value: "#cea554",
  },
  submitColor,
}) => {
  const [pickerColor, setPickerColor] = useState<string>(color.value);
  const [colorName, setColorName] = useState<string>(color.name);
  const [isInvalidColorName, setIsInvalidColorName] = useState<boolean>(false);

  return (
    <>
      <h1>Edit Color</h1>

      <StyledColorPicker color={pickerColor} onChange={setPickerColor} />
      <NameInput
        error={isInvalidColorName}
        type="text"
        value={colorName}
        onChange={(e) => {
          if (e.target.value.length > 0 && isInvalidColorName) {
            setIsInvalidColorName(false);
          } else if (e.target.value.length === 0 && !isInvalidColorName) {
            setIsInvalidColorName(true);
          }
          setColorName(e.target.value);
        }}
      />
      <PreviewLabel>Preview of new color</PreviewLabel>
      <StyledColorPreview
        color={{
          value: pickerColor,
          name: colorName,
        }}
      />
      <SaveColor
        disabled={isInvalidColorName}
        onClick={() => {
          submitColor({
            name: colorName,
            value: pickerColor,
          });
        }}
      >
        Save
      </SaveColor>
    </>
  );
};

const StyledColorPreview = styled(ColorPreview)`
  grid-column: 1 / 2;
  grid-row: 5;
`;

const StyledColorPicker = styled(HexColorPicker)`
  grid-column: 1 / 2;
  grid-row: 2;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  ${cardStyle}
`;

const NameInput = styled.input<{ error: boolean }>`
  grid-column: 1 / 2;
  grid-row: 3;
  background-color: var(--white);
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 700;
  color: var(--black);
  border: ${(props) =>
    props.error ? "2px solid var(--primary-error)" : "2px solid transparent"};
  outline: none;
`;

const PreviewLabel = styled.h2`
  grid-column: 1 / 2;
  grid-row: 4;
  margin: 0;
  margin-top: 2rem;
`;

const SaveColor = styled(Button)`
  grid-column: 1 / 2;
  grid-row: 6;
`;
