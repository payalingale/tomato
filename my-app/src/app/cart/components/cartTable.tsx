import CartTotal from "../cartTotal";

type Props = {
  id: string;
  category: string;
  name: string;
  price: number;
  total: number;
};

const CartTable: React.FC<Props> = ({ id, category, name, price, total }) => {
  return (
    <div>
      <table className="flex flex-col h-auto align-middle m-5">
        {/* <thead className=" flex justify-between p-2">
          <tr className="flex w-lvw justify-between items-center">
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead> */}
        <tbody>
          <tr
            key={id}
            className="flex w-full justify-between border-t border-b border-gray-200 p-2"
          >
            <td>{category}</td>
            <td>{name}</td>
            <td>${price}</td>
            <td>1</td>
            <td>${total}</td>
            <td>
              <button>x</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default CartTable;
