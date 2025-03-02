interface CardBodyProps {
  children: React.ReactNode;
}

const CardBody = ({ children }: CardBodyProps) => {
  return <div className="flex flex-col gap-4 !p-4">{children}</div>;
};

export default CardBody;
