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
  return CertifiedSend({
    method: "get",
    url: `/api/${userID}/setting`,
  });
};

export const getDogInfo = (petID) => {
  return CertifiedSend({
    method: "get",
    url: `/api/pets/${petID}`,
  });
};

export const getDogDiary = (params) => {
  return CertifiedSend({
    method: "get",
    url: `/api/ai/message`,
    params: params,
  });
};

export const getStatistic = (id, date) => {
  return CertifiedSend({
    method: "get",
    url: `/api/actions?petId=${id}&date=${date}`,
  });
};
