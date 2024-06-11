import CertifiedSend from "./CertifiedSend.js";

export const postDogRegister = (data, userID) => {
  return CertifiedSend({
    method: "post",
    url: `/api/pets?memberId=${userID}`,
    data: data,
  });
};

export const getDogId = (userID) => {
  return CertifiedSend({
    method: "get",
    url: `/api/${userID}/setting`
  })
}

export const getDogInfo = (petID) => {
  return CertifiedSend({
    method: "get",
    url: `/api/pets/${petID}`
  })
}