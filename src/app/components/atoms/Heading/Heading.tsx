interface IHeading extends React.HTMLProps<HTMLHeadingElement> {
  testId?: string;
}

export const Heading: React.FC<IHeading> = (props: IHeading) => {
  return (
    <h2
      data-testid={props.testId}
      className="text-2xl text-center font-[700]"
      {...props}
    />
  );
};
