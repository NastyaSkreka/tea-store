import { useState } from "react";

export default function FavHeart() {
    const [isFav, setIsFav] = useState(false);

    const handleClick = () => {
      setIsFav(!isFav); 
    };

  return (
    <svg onClick={handleClick} style={{ fill: isFav ? '#003B40' : 'transparent' }}
      width="16"
      height="13"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7663 2.23375C15.3753 1.84262 14.9111 1.53234 14.4002 1.32065C13.8893 1.10896 13.3417 1 12.7887 1C12.2357 1 11.6881 1.10896 11.1772 1.32065C10.6663 1.53234 10.2021 1.84262 9.81116 2.23375L8.9998 3.04511L8.18843 2.23375C7.39874 1.44406 6.32768 1.00041 5.21089 1.00041C4.09409 1.00041 3.02303 1.44406 2.23334 2.23375C1.44365 3.02344 1 4.0945 1 5.2113C1 6.32809 1.44365 7.39915 2.23334 8.18884L3.0447 9.0002L8.9998 14.9553L14.9549 9.0002L15.7663 8.18884C16.1574 7.79789 16.4677 7.33371 16.6794 6.82281C16.891 6.31191 17 5.76431 17 5.2113C17 4.65828 16.891 4.11068 16.6794 3.59978C16.4677 3.08888 16.1574 2.6247 15.7663 2.23375V2.23375Z"
        stroke="#003B40"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
