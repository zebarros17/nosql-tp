db.createView("vw_user_cart", "store_users", [
  {
    $lookup: {
      from: "shopping_session",
      localField: "user_id",
      foreignField: "user_id",
      as: "session_info",
    },
  },
  {
    $unwind: "$session_info",
  },
  {
    $lookup: {
      from: "cart_item",
      localField: "session_info.session_id",
      foreignField: "session_id",
      as: "cart_info",
    },
  },
  {
    $unwind: "$cart_info",
  },
  {
    $lookup: {
      from: "product",
      localField: "cart_info.product_id",
      foreignField: "product_id",
      as: "product_info",
    },
  },
  {
    $unwind: "$product_info",
  },
  {
    $project: {
      _id: 0,
      user_id: 1,
      session_id: "$session_info.session_id",
      product_id: "$cart_info.product_id",
      product_name: "$product_info.product_name",
      price: "$product_info.price",
      quantity: "$cart_info.quantity",
    },
  },
]);
