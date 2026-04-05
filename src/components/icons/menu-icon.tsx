import { SVGProps } from "react";

// 1. Tạo một Interface mới mở rộng từ SVGProps và thêm thuộc tính size
interface MenuIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

const MenuIcon = ({ size, ...props }: MenuIconProps) => (
  <svg
    viewBox="0 0 38 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // 2. Gán size vào width và height, nếu không truyền size thì mặc định lấy từ props hoặc để trống
    width={size || props.width}
    height={size || props.height}
    {...props}
  >
    <rect
      x={38}
      y={22}
      width={38}
      height={8}
      rx={4}
      transform="rotate(-180 38 22)"
      fill="#FF5532"
    />
    <rect
      x={38}
      y={36}
      width={25}
      height={8}
      rx={4}
      transform="rotate(-180 38 36)"
      fill="#FF5532"
    />
    <rect width={26} height={8} rx={4} fill="#FF5532" />
    <ellipse
      cx={4}
      cy={32}
      rx={4}
      ry={4}
      transform="rotate(-180 4 32)"
      fill="#FF5532"
    />
    <ellipse cx={34} cy={4} rx={4} ry={4} fill="#FF5532" />
  </svg>
);

export default MenuIcon;
