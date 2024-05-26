const TourDetail = require("../models/detail_tours");
const tourService = require("../service/tourService");

exports.getTours = (req, res, next) => {
  Tour.fetchAll((tours) => {
    res.render("admin/products", {
      tous: tours,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};

exports.createTour = async (req, res, next) => {
  try {
    const { title, imageUrl, price, description } = req.body; // Lấy dữ liệu từ request body

    const response = await tourService.createNewTour({
      title,
      imageUrl,
      price,
      description,
    }); // Gọi hàm createNewTour từ service
    console.log(response); // In ra message trả về từ service (nếu có)

    res.status(201).json({ message: "Tour created successfully!" }); // Trả về response thành công
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating tour" }); // Trả về response lỗi
  }
};

exports.getAddTour = (req, res, next) => {
  res.render("admin/list-response", {
    pageTitle: "Add Tour",
    path: "/admin/add-tour",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.getResponse = async (req, res, next) => {
  let listFeedback = await tourService.getAllCustomerFeedback();
  console.log("da vao duoc");
  res.render("admin/list-response", {
    pageTitle: "Response Customer",
    path: "/admin/get-response",
    feedbacks: listFeedback, // Đảm bảo rằng tên biến truyền vào là "feedbacks"
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};
