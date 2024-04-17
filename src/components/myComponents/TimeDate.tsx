import { DateTime } from "luxon";

const TimeDate = () => {
  const now = DateTime.local();

  return (
    <>
      {now.toLocaleString(DateTime.DATETIME_MED)}
      <br />
      giờPhút : {now.toFormat("hh:mm")}
      <br />
      Thứ, ngàyThángNăm : {now.toFormat("cccc, dd LLLL, yyyy")}
    </>
  );
};

export default TimeDate;
