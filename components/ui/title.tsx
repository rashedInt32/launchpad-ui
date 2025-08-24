export const Title = ({
  text,
  isBreak,
  breakText,
}: {
  text: string;
  isBreak: boolean;
  breakText: string;
}) => {
  return (
    <h2 className="text-3xl font-heading font-bold text-center text-[var(--text)] mb-20">
      {isBreak && breakText ? (
        <>
          {text.replace(breakText, "")}
          <br /> <span className="text-[var(--accent)]">{breakText}</span>
        </>
      ) : (
        text
      )}
    </h2>
  );
};
