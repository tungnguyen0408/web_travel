import db from "../models/index";

const { Sequelize, Op } = require("sequelize");
let createNewTour = async (data) => {
  console.log(
    "..............................................................."
  );
  console.log(data);
  console.log(
    "..............................................................."
  );
  return new Promise(async (resolve, reject) => {
    try {
      await db.Tour.create({
        title: data.title,
        imageUrl: data.imageUrl,
        price: data.price,
        description: data.description,
      });
      resolve("ok ! tao new tour thanh cong !");
    } catch (e) {
      reject(e);
    }
  });
};
const findAllTours = async () => {
  try {
    const tours = await db.Tour.findAll();
    return tours;
  } catch (error) {
    throw error; // Hoặc xử lý lỗi theo cách mong muốn
  }
};

const filterTour = (searchParams) => {
  return new Promise((resolve, reject) => {
    const searchConditions = {};

    // Kiểm tra và thêm điều kiện 'price' nếu không rỗng
    if (searchParams.price) {
      // Trích xuất các giá trị số từ chuỗi
      const pricePattern = /(\d+\.\d+\.\d+)/g;
      const priceRange = searchParams.price.match(pricePattern);
      if (priceRange && priceRange.length === 2) {
        const minPrice = Number(priceRange[0].replace(/\./g, ""));
        const maxPrice = Number(priceRange[1].replace(/\./g, ""));
        searchConditions.price = {
          [Op.between]: [minPrice, maxPrice],
        };
      } else {
        reject(new Error("Giá trị price không hợp lệ:" + searchParams.price));
      }
    }

    db.DetailTour.findAll({
      where: searchConditions,
      raw: true,
    })
      .then((tours) => {
        resolve(tours);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

let filterTourCommon = (searchQuery) => {
  console.log(searchQuery);
  return new Promise((resolve, reject) => {
    const validColumns = ["name_tour"];

    const whereClause = {};
    for (const key in searchQuery) {
      if (searchQuery.hasOwnProperty(key) && validColumns.includes(key)) {
        whereClause[key] = {
          [Op.like]: `%${searchQuery[key]}%`,
        };
      }
    }

    db.DetailTour.findAll({
      where: whereClause,
      raw: true,
    })
      .then((tours) => {
        resolve(tours);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// let getAllCustomerFeedback = async () => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let responses = await db.Fee.findAll({
//         limit: 20,
//       });
//       resolve(responses);
//     } catch (e) {
//       reject(e);
//     }
//   });
// };

// let getAllCustomerFeedback = async () => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let responses = await db.Feedback.findAll({
//         attributes: ["name", "id_tour", "rate", "day", "note"],
//         limit: 20,
//       });
//       resolve(responses);
//     } catch (e) {
//       reject(e);
//     }
//   });
// };
let getAllCustomerFeedback = async () => {
  try {
    let feedbacks = await db.Feedback.findAll({
      attributes: ["name", "rate", "day", "note"],
      include: [
        {
          model: db.DetailTour,
          attributes: ["name_tour"], // Đổi tên cột thành tên cột thực tế trong bảng "DetailTours"
          as: "tour",
        },
      ],
      limit: 20,
    });
    return feedbacks;
  } catch (error) {
    console.error("Error when fetching customer feedback:", error);
    throw error;
  }
};

module.exports = {
  createNewTour: createNewTour,
  findAllTours: findAllTours,
  filterTour: filterTour,
  filterTourCommon: filterTourCommon,
  getAllCustomerFeedback: getAllCustomerFeedback,
};
