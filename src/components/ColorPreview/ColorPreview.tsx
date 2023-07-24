import { FunctionComponent } from "react";
import { styled } from "styled-components";
import { toast } from "react-toastify";
import Settings from "./icons/settings";
import { Link } from "wouter";
import { BasicColorInfoFragment } from "../../gql/Color.generated";
import { cardStyle } from "../../style/styleMixins";

interface IColorPreviewProps {
  detailLink?: string;
  color: BasicColorInfoFragment;
  className?: string;
}
export const ColorPreview: FunctionComponent<IColorPreviewProps> = ({
  color,
  className,
  detailLink,
}) => {
  if (!color) {
    return null;
  }
  return (
    <PreviewFrame data-cy="color-preview" className={className}>
      <ColorField data-cy="color-field" color={color.value}>
        <CopyToClipboard
          onClick={() => {
            navigator.clipboard.writeText(color.value);
            toast(`${color.value} copied to clipboard`);
          }}
        >
          copy color to clipboard
        </CopyToClipboard>
      </ColorField>
      <ColorInfo>
        <ColorName data-cy="color-name">{color.name || "-"}</ColorName>
        <ColorValue>{color.value}</ColorValue>
        {detailLink && (
          <Link href={detailLink}>
            <ViewMore>
              <Settings width={20} />
            </ViewMore>
          </Link>
        )}
      </ColorInfo>
    </PreviewFrame>
  );
};

const PreviewFrame = styled.div`
  ${cardStyle}
  overflow: hidden;
`;

const ColorField = styled.div<{ color: string }>`
  aspect-ratio: 3 / 2;
  background-color: ${(props) => props.color};
  border-radius: 0.5rem 0.5rem 0 0;
  position: relative;

  &:hover {
    button {
      opacity: 0.5;
      transform: translateY(0);
    }
  }
`;

const ColorInfo = styled.div`
  padding: 0.5rem;
  background-color: var(--white);
  border-radius: 0 0 0.5rem 0.5rem;
  position: relative;
  z-index: 2;
  display: grid;
`;

const ColorName = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--black);
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ColorValue = styled.p`
  margin: 0.5rem 0 0 0;
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--black);
`;

const CopyToClipboard = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 1rem 0.5rem;
  border: none;
  border-radius: 0.5rem 0.5rem 0 0;
  opacity: 0;
  background-color: #fff;
  transform: translateY(100%);
  font-weight: 700;
  color: var(--black);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  z-index: 1;
`;

const ViewMore = styled.a`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  justify-self: end;
  align-self: center;
  padding: 0.5rem;
  color: var(--black);
  cursor: pointer;
`;
