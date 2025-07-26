import Masonry from "react-masonry-css"
import { lazy } from "react";

const Cart = lazy(() => import('./Cart/Cart'))

export default function Carts() {
  const breakpointColumnsObj = {
    default: 4,
    1440: 4,
    1024: 3,
    768: 2,
    460: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      <Cart
        image="https://images.unsplash.com/photo-1478059299873-f047d8c5fe1a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        header="BMW"
        link="?123123"
      />
      <Cart
        image="https://www.stratstone.com/-/media/stratstone/blog/2024/top-10-best-supercars-of-2024/porsche-911-gt3-rs-on-nurburgring-1280x720px.ashx"
        header="BMW"
        link="?123123"
      />
      <Cart
        image="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        header=""
        link="?123123"
      />
      <Cart
        image="https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        header=""
        link="?123123"
      />
      <Cart
        image="https://plus.unsplash.com/premium_photo-1673240367277-e1d394465b56?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        header="BMW"
        link="?123123"
      />
      <Cart
        image="https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        header="BMW"
        link="?123123"
      />
      <Cart
        image="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        header=""
        link="?123123"
      />
      <Cart
        image="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        header=""
        link="?123123"
      />
      <Cart
        image="https://plus.unsplash.com/premium_photo-1674917000586-b7564f21540e?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        header="BMW"
        link="?123123"
      />
      <Cart
        image="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        header="BMW"
        link="?123123"
      />
      <Cart
        image="https://plus.unsplash.com/premium_photo-1673264933086-34d16c330dfe?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        header="BMW"
        link="?123123"
      />
      <Cart
        image="https://images.unsplash.com/photo-1478059299873-f047d8c5fe1a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        header="BMW"
        link="?123123"
      />
      <Cart
        image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        header=""
        link="?123123"
      />
      <Cart
        image="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=1624&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        header=""
        link="?123123"
      />
    </Masonry>
  );
}
