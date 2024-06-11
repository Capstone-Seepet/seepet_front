import CertifiedSend from "./CertifiedSend.js";
import Send from "./Send.js";

export const postDogRegister = (data, userID) => {
  return CertifiedSend({
    method: "post",
    url: `/api/pets?memberId=${userID}`,
    data: data,
  });
};

export const getDogId = (userID) => {
  return Send({
    method: "get",
    url: `/api/${userID}/setting`
  })
}

export const getDogInfo = (petID) => {
  return Send({
    method: "get",
    url: `/api/pets/${petID}`
  })
}