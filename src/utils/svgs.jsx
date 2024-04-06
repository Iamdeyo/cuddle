const DropdownIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={5}
    fill="none"
    {...props}
  >
    <path fill="currentColor" d="m.152 0 5 5 5-5h-10Z" />
  </svg>
);

const MenuIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#000"
        d="M3.486 4.183h18v2h-18v-2Zm0 7h12v2h-12v-2Zm0 7h18v2h-18v-2Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.486.183h24v24h-24z" />
      </clipPath>
    </defs>
  </svg>
);

const ArrowLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M3.914 5H17.5a1 1 0 1 1 0 2H3.914l3.243 3.243a1 1 0 1 1-1.415 1.414L1.5 7.414a2 2 0 0 1 0-2.828L5.742.343a1 1 0 1 1 1.415 1.414L3.914 5Z"
    />
  </svg>
);
const ArrowRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M15.086 5H1.5a1 1 0 0 0 0 2h13.586l-3.243 3.243a1 1 0 0 0 1.415 1.414L17.5 7.414a2 2 0 0 0 0-2.828L13.258.343a1 1 0 1 0-1.415 1.414L15.086 5Z"
    />
  </svg>
);

export { MenuIcon, DropdownIcon, ArrowLeft, ArrowRight };
