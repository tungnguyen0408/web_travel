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
        // Kiểm tra và thêm điều kiện 'start-destination' nếu không rỗng
        // if (searchParams["start-destination"]) {
        //   searchConditions.startDestination = searchParams["start-destination"];
        // }

        // // Kiểm tra và thêm điều kiện 'end-destination' nếu không rỗng
        // if (searchParams["end-destination"]) {
        //   searchConditions.endDestination = searchParams["end-destination"];
        // }
        searchConditions.price = {
          [Op.between]: [minPrice, maxPrice],
        };
      } else {
        reject(new Error("Giá trị price không hợp lệ:" + searchParams.price));
      }
    }

    db.Tour.findAll({
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

module.exports = {
  createNewTour: createNewTour,
  findAllTours: findAllTours,
  filterTour: filterTour,
};
