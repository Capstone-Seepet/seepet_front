import { useState, useEffect } from "react";
import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";
import { Upload } from "@aws-sdk/lib-storage";

import HeaderLayout from "../../commons/compononets/header/HeaderLayout";
import FooterLayout from "../../commons/compononets/footer/FooterLayout";
import style from "./DogRegisterPage.module.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { postDogRegister } from "../../apis/DogInfo";
import { usersAtom } from "../../stores/usersAtom";
import { useRecoilValue } from "recoil";

const DogRegisterPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [profileUrl, setProfile] = useState(null);
  const [gender, setGender] = useState("male");
  const [imagePreviews, setImagePreviews] = useState([null, null, null, null]);
  const [imagesUrl, setImagesUrl] = useState([null, null, null, null]);
  const [imageIndex, setImageIndex] = useState(0);

  const Users = localStorage.getItem("UserInfo");

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  // 이미지 파일 업로드
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const id = event.target.id;
    const isProfile = id === "thumbnail" ? true : false;
    const index =
      id === "image" ? 0 : id === "image2" ? 1 : id === "image3" ? 2 : 3;
    setImageIndex(index);
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        // setPreviewUrl(reader.result);
        if (isProfile) {
          setPreviewUrl(reader.result);
        } else {
          setImagePreviews((prevPreviews) => {
            const newPreviews = [...prevPreviews];
            newPreviews[index] = reader.result;
            return newPreviews;
          });
        }
      };
      reader.readAsDataURL(file);
    } else {
      if (isProfile) {
        setPreviewUrl(null);
      } else {
        setImagePreviews((prevPreviews) => {
          const newPreviews = [...prevPreviews];
          newPreviews[index] = null;
          return newPreviews;
        });
      }
    }
  };
  useEffect(() => {
    const uploadProfile = async () => {
      if (selectedFile !== null) {
        try {
          const uploadUrl = await handleUpload();
          setProfile(uploadUrl);
        } catch (error) {
          console.error("업로드 실패:", error);
        }
      }
    };

    uploadProfile();
  }, [previewUrl]);

  useEffect(() => {
    const uploadProfile = async () => {
      if (selectedFile !== null) {
        try {
          const uploadUrl = await handleUpload();
          setImagesUrl((imagesUrl) => {
            const newUrl = [...imagesUrl];
            newUrl[imageIndex] = uploadUrl;
            return newUrl;
          });
        } catch (error) {
          console.error("업로드 실패:", error);
        }
      }
    };

    uploadProfile();
  }, [imagePreviews]);

  // 파일 업로드 핸들러
  const handleUpload = async () => {
    if (!selectedFile) {
      alert("프로필을 등록해 주세요!");
      return;
    }

    const uniqueFileName = `${uuidv4()}-${selectedFile.name}`;
    const key = `image/${uniqueFileName}`;

    const REGION = process.env.REACT_APP_AWS_REGION;
    const ACCESS_KEY_ID = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
    const SECRET_ACCESS_KEY_ID = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;

    AWS.config.update({
      region: REGION,
      accessKeyId: ACCESS_KEY_ID,
      secretAccessKey: SECRET_ACCESS_KEY_ID,
    });

    const upload = new AWS.S3.ManagedUpload({
      params: {
        ACL: "public-read",
        Bucket: process.env.REACT_APP_AWS_S3_BUCKET,
        Key: key,
        Body: selectedFile,
        ContentType: selectedFile.type,
      },
    });

    try {
      const data = await upload.promise();
      console.log("업로드 성공:", data.Location);
      // setProfile(data.Location);
      return data.Location;
    } catch (err) {
      console.error("업로드 실패:", err);
      throw err;
    }
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const UserInfo = JSON.parse(Users);
    console.log("memberId : ", UserInfo.memberId);
    try {
      const dataForm = {
        name: data.name,
        profile: profileUrl,
        gender: gender,
        adoptionDate: data.adoptionDate,
        birthDate: data.birthDate,
        weight: parseInt(data.weight),
        images: imagesUrl,
      };
      console.log(dataForm);

      postDogRegister(dataForm, UserInfo.memberId)
        .then((response) => {
          console.log(response.data);
          alert("통신 성공!");
          navigate("/main");
        })
        .catch((err) => {
          console.log("error:", err);
        });
    } catch (err) {
      console.error("업로드 실패:", err);
    }

    // navigate("/main");
  };

  return (
    <>
      <HeaderLayout />
      <main className={style.wrap}>
        <div className={style.innerWrap}>
          <h1 className={style.title}>반려동물 정보 입력</h1>
          <div className={style.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={style.thumbnailWrap}>
                {previewUrl ? (
                  <label
                    htmlFor="thumbnail"
                    style={{
                      backgroundImage: previewUrl
                        ? `url(${previewUrl})`
                        : "none",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></label>
                ) : (
                  <label htmlFor="thumbnail">
                    <img
                      src={process.env.PUBLIC_URL + "/images/icon_plus.svg"}
                      alt="plus"
                    />
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/icon_thumbnail.svg"
                      }
                      alt="이미지 등록"
                    />
                    <div className={style.labelDeco}>
                      <img
                        src={process.env.PUBLIC_URL + "/images/icon_camera.svg"}
                        alt="camera"
                      />
                    </div>
                  </label>
                )}

                <input
                  type="file"
                  id="thumbnail"
                  name="thumbnail"
                  onChange={handleFileChange}
                />
              </div>
              <div className={style.inputWrap}>
                <legend>
                  이름
                  {errors.name ? (
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/icon_check_red.svg"
                      }
                      alt="check"
                    />
                  ) : (
                    <img
                      src={process.env.PUBLIC_URL + "/images/icon_check.svg"}
                      alt="check"
                    />
                  )}
                </legend>
                <input
                  type="text"
                  name="name"
                  className={`${style.longInput} ${
                    errors.name ? style.error : ""
                  }`}
                  {...register("name", { required: true })}
                />
              </div>
              <div className={style.inputWrap}>
                <legend>이미지 등록</legend>
                <div className={style.inputBox}>
                  <div className={style.fileWrap}>
                    {imagePreviews[0] ? (
                      <label
                        htmlFor="image"
                        style={{
                          backgroundImage: imagePreviews[0]
                            ? `url(${imagePreviews[0]})`
                            : "none",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></label>
                    ) : (
                      <label htmlFor="image">
                        <img
                          src={process.env.PUBLIC_URL + "/images/icon_plus.svg"}
                          alt="plus"
                        />
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icon_thumbnail.svg"
                          }
                          alt="이미지 등록"
                        />
                      </label>
                    )}
                    <input
                      type="file"
                      id="image"
                      className={style.inputFile}
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className={style.fileWrap}>
                    {imagePreviews[1] ? (
                      <label
                        htmlFor="image2"
                        style={{
                          backgroundImage: imagePreviews[1]
                            ? `url(${imagePreviews[1]})`
                            : "none",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></label>
                    ) : (
                      <label htmlFor="image2">
                        <img
                          src={process.env.PUBLIC_URL + "/images/icon_plus.svg"}
                          alt="plus"
                        />
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icon_thumbnail.svg"
                          }
                          alt="이미지 등록"
                        />
                      </label>
                    )}
                    <input
                      type="file"
                      id="image2"
                      className={style.inputFile}
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className={style.fileWrap}>
                    {imagePreviews[2] ? (
                      <label
                        htmlFor="image3"
                        style={{
                          backgroundImage: imagePreviews[2]
                            ? `url(${imagePreviews[2]})`
                            : "none",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></label>
                    ) : (
                      <label htmlFor="image3">
                        <img
                          src={process.env.PUBLIC_URL + "/images/icon_plus.svg"}
                          alt="plus"
                        />
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icon_thumbnail.svg"
                          }
                          alt="이미지 등록"
                        />
                      </label>
                    )}
                    <input
                      type="file"
                      id="image3"
                      className={style.inputFile}
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className={style.fileWrap}>
                    {imagePreviews[3] ? (
                      <label
                        htmlFor="image4"
                        style={{
                          backgroundImage: imagePreviews[3]
                            ? `url(${imagePreviews[3]})`
                            : "none",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></label>
                    ) : (
                      <label htmlFor="image4">
                        <img
                          src={process.env.PUBLIC_URL + "/images/icon_plus.svg"}
                          alt="plus"
                        />
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/icon_thumbnail.svg"
                          }
                          alt="이미지 등록"
                        />
                      </label>
                    )}
                    <input
                      type="file"
                      id="image4"
                      className={style.inputFile}
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>
              <div className={style.inputWrap}>
                <legend>성별</legend>
                <div className={style.inputBox}>
                  <div className={style.radioWrap}>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      onChange={handleGenderChange}
                    />
                    <label htmlFor="male">
                      수컷
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/icon_gender_male.svg"
                        }
                        alt="male"
                      />
                    </label>
                  </div>
                  <div className={style.radioWrap}>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      onChange={handleGenderChange}
                    />

                    <label htmlFor="female">
                      암컷
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/icon_gender_female.svg"
                        }
                        alt="male"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className={style.inputWrap}>
                <legend>
                  우리가 처음 만난 날
                  {errors.firstMeeting ? (
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/icon_check_red.svg"
                      }
                      alt="check"
                    />
                  ) : (
                    <img
                      src={process.env.PUBLIC_URL + "/images/icon_check.svg"}
                      alt="check"
                    />
                  )}
                </legend>
                <input
                  type="date"
                  className={`${style.longInput} ${
                    errors.firstMeeting ? style.error : ""
                  }`}
                  {...register("adoptionDate", { required: true })}
                />
              </div>
              <div className={style.inputBox}>
                <div className={`${style.inputWrap} ${style.doubleWrap}`}>
                  <legend>
                    생년월일
                    {errors.birth ? (
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/icon_check_red.svg"
                        }
                        alt="check"
                      />
                    ) : (
                      <img
                        src={process.env.PUBLIC_URL + "/images/icon_check.svg"}
                        alt="check"
                      />
                    )}
                  </legend>
                  <input
                    type="date"
                    className={`${style.longInput} ${
                      errors.birth ? style.error : ""
                    }`}
                    {...register("birthDate", { required: true })}
                  />
                </div>
                <div className={`${style.inputWrap} ${style.doubleWrap}`}>
                  <legend>
                    몸무게
                    {errors.weight ? (
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/icon_check_red.svg"
                        }
                        alt="check"
                      />
                    ) : (
                      <img
                        src={process.env.PUBLIC_URL + "/images/icon_check.svg"}
                        alt="check"
                      />
                    )}
                  </legend>
                  <input
                    type="text"
                    className={`${style.longInput} ${
                      errors.weight ? style.error : ""
                    }`}
                    {...register("weight", { required: true })}
                  />
                </div>
              </div>
              <div className={style.btnBox}>
                <input
                  type="submit"
                  className={style.submitBtn}
                  value="등록하기"
                  onClick={handleUpload}
                />
              </div>
            </form>
          </div>
        </div>
      </main>
      <FooterLayout />
    </>
  );
};

export default DogRegisterPage;
