// import type { FC } from "react";
// import type { User } from "../types/user";

// export const ListItem: FC<User> = (props) => {
//   const { id, name, age, personalColor = "grey", hobbies } = props;
//   return (
//     <p style={{ color: personalColor }}>
//       {id}:{name}({age}) {hobbies?.join(" / ")}
//     </p>
//   );
// };

type User = {
  id: number;
  name: string;
  age: number;
  personalColor?: string;
  // hobbies?: string[];
};

// export const ListItem = (props) => {
export const ListItem = (props: User) => {
  const { id, name, age, personalColor } = props;
  return (
    <p style={{ color: personalColor }}>
      {id}:{name}({age})
    </p>
  );
};
