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

export { MenuIcon, DropdownIcon };
