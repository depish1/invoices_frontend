import Button from 'Components/SharedComponents/Button/Button';
import ViewHeader from 'Components/SharedComponents/ViewHeader/ViewHeader';

interface IViewHeaderWithButtonProps {
  buttonText: string;
  headerText: string;
  buttonClickHandler: () => void;
}

const ViewHeaderWithButton = ({ buttonClickHandler, buttonText, headerText }: IViewHeaderWithButtonProps) => {
  const button = <Button isSecondary onClick={buttonClickHandler} size="small" text={buttonText} />;

  return <ViewHeader button={button} text={headerText} />;
};

export default ViewHeaderWithButton;
