import { useState, useEffect } from "react";
import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";
import { Upload } from "@aws-sdk/lib-storage";

import HeaderLayout from "../../commons/compononets/header/HeaderLayout";
import FooterLayout from "../../commons/compononets/footer/FooterLayout";
import style from "./DogRegisterPage.module.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const DogRegisterPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [profileUrl, setProfile] = useState(null);
  const [gender, setGender] = useState("male");

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGenderChange = (event) => {
    setGender(event.target.value); // 선택된 값으로 gender 값을 설정합니다.
  };

  // 이미지 파일 업로드
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };
  useEffect(() => {
    if (selectedFile !== null) {
      handleUpload();
    }
  }, [selectedFile]);

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
      setProfile(data.Location);
      return data;
    } catch (err) {
      console.error("업로드 실패:", err);
      throw err;
    }
  };

  const onSubmit = async (data) => {
    try {
      console.log("Form Data:", data);
      const dataForm = {
        name: data.name,
        profile: profileUrl,
        gender: gender,
        adoptionDate: data.adoptionDate,
        birthDate: data.birthDate,
        weithg: 0,
        images: null,
      };

      console.log(dataForm);

      navigate("/main");
    } catch (err) {
      console.error("업로드 실패:", err);
    }

    navigate("/main");
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
                    <label htmlFor="image">
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
                    </label>
                    <input type="file" id="image" className={style.inputFile} />
                  </div>
                  <div className={style.fileWrap}>
                    <label htmlFor="image2">
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
                    </label>
                    <input
                      type="file"
                      id="image2"
                      className={style.inputFile}
                    />
                  </div>
                  <div className={style.fileWrap}>
                    <label htmlFor="image3">
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
                    </label>
                    <input
                      type="file"
                      id="image3"
                      className={style.inputFile}
                    />
                  </div>
                  <div className={style.fileWrap}>
                    <label htmlFor="image4">
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
                    </label>
                    <input
                      type="file"
                      id="image4"
                      className={style.inputFile}
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
                      // checked={gender === "male"} // male이 선택되었을 때 true로 설정됩니다.
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
                      // checked={gender === "female"} // female이 선택되었을 때 true로 설정됩니다.
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
