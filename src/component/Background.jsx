import background from "../assets/Background.jpg";
export const Background = () => {
  return (
    <div className="p-4 mt-10">
      <img
        className="w-full "
        src={background}
        alt="callout background image"
      />
    </div>
  );
};
