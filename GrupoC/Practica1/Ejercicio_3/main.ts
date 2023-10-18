const mapTime = (time: string): string => {
  const regex = /\b\d{1,2}:\d{2} [ap]m\b/gi;
  if (!regex.test(time)) return "Not valid";

  const splitedTime = time.split(" ");
  const splitedHoursMinutes = splitedTime[0].split(":");

  return (
    String(
      splitedTime[1].toLocaleLowerCase() === "pm"
        ? Number(splitedHoursMinutes[0]) + 12 === 24
          ? "00"
          : Number(splitedHoursMinutes[0]) + 12
        : splitedHoursMinutes[0]
    ).padStart(2, "0") + splitedHoursMinutes[1]
  );
};


export default mapTime;
