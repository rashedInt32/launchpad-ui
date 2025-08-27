export const Title = ({
  text,
  breakText,
  subTitle,
  colorText,
}: {
  text: string;
  breakText?: string;
  subTitle?: string;
  colorText?: string;
}) => {
  return (
    <div className="mb-20 text-center">
      <h2 className="text-5xl font-heading font-bold text-[var(--text)]">
        {breakText ? (
          <>
            {text.replace(breakText, "")}
            <br /> <span className="text-[var(--accent)]">{breakText}</span>
          </>
        ) : !colorText ? (
          text
        ) : null}

        {colorText && (
          <>
            {text.replace(colorText, "")}
            <span className="text-[var(--accent)]">{colorText}</span>
          </>
        )}
      </h2>
      {subTitle && <p className="pt-4 text-xl">{subTitle}</p>}
    </div>
  );
};
