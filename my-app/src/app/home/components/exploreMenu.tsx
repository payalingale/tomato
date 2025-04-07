import { StaticImageData } from "next/image";
import { FunctionComponent } from "react";

type Props = {
  menuName: string;
  menuImage: StaticImageData;
};

const ExploreMenu: FunctionComponent<Props> = ({ menuName, menuImage }) => {
  return (
    <div>
      <h2>Explore our menu</h2>
      <p>
        Choose from a diverse menu featuring a delectable array of dishes .Our
        mission is to satisfy your cravings and elevate your <br /> dining
        experience,one delicious meal at a time.
      </p>
    </div>
  );
};

export default ExploreMenu;
