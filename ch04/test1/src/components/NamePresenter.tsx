interface NamePresenterProps {
  displayName: string;
}

const NamePresenter = ({ displayName }: NamePresenterProps) => {
  return (
    <div>
      <p>{displayName}</p>
    </div>
  );
};

export default NamePresenter;
