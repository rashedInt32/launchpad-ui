export const Title = ({
  text,
  isBreak,
  breakText,
  subTitle,
  colorText,
}: {
  text: string;
  isBreak?: boolean;
  breakText?: string;
  subTitle?: string;
  colorText?: string;
}) => {
  return (
    <div className="mb-20">
      <h2 className="text-5xl font-heading font-bold text-center text-[var(--text)]">
        {isBreak && breakText && (
          <>
            {text.replace(breakText, "")}
            <br /> <span className="text-[var(--accent)]">{breakText}</span>
          </>
        )}

        {colorText ? (
          <>
            {text.replace(colorText, "")}
            <span className="text-[var(--accent)]">{colorText}</span>
          </>
        ) : (
          text
        )}
      </h2>
      {subTitle && <p className="pt-4 text-xl">{subTitle}</p>}
    </div>
  );
};
