import Send from "./Send.js";

export const postDogRegister = (data) => {
  return Send({
    method: "post",
    url: `/api/pets`,
    data: data,
  });
};
