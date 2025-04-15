const CartTableHead: React.FC = () => {
  return (
    <table className="flex flex-col h-auto align-middle m-5">
      <thead className=" flex justify-between p-2">
        <tr className="flex w-lvw justify-between items-center">
          <th>Id</th>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Remove</th>
        </tr>
      </thead>
    </table>
  );
};
export default CartTableHead;
