import React from "react";

const List = () => {
  const data = "test";

  console.log(data);
  return (
    <section>
      <h1>List component</h1>
    </section>
  );

  //   (
  // <>
  //   {allThings.map((thing) => {
  //     const {
  //       id,
  //       goodFirst,
  //       goodSecond,
  //       goodThird,
  //       badFirst,
  //       badSecond,
  //       badThird,
  //       betterFirst,
  //       betterSecond,
  //       betterThird,
  //     } = thing;
  //     return (
  //       <div className="item" key={id}>
  //         <div className="item" key={id}>
  //           <h4>3 good things you did today</h4>
  //           <p>{goodFirst}</p>
  //           <p>{goodSecond}</p>
  //           <p>{goodThird}</p>
  //         </div>
  //         <div className="item" key={id}>
  //           <h4>3 bad things you did today</h4>
  //           <p>{badFirst}</p>
  //           <p>{badSecond}</p>
  //           <p>{badThird}</p>
  //         </div>
  //         <div className="item" key={id}>
  //           <h4>3 things you could do better tomorrow </h4>
  //           <p>{betterFirst}</p>
  //           <p>{betterSecond}</p>
  //           <p>{betterThird}</p>
  //         </div>
  //       </div>
  //     );
  //   })}
  // </>
  //   );
};

export default List;
