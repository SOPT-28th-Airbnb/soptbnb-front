import axios from "axios";

const instance = axios.create({
  baseURL: "http://18.116.201.53:5000",
  timeout: 1000
});

export const getNearCard = async () => {
  try {
    const data = await instance.get("/api/spot");
    console.log(data);
    console.log("[SUCCESS] GET near card data");
    return data.data.data.spot;
  } catch (e) {
    console.log("[FAIL] GET near card data");
    return null;
  }
};

export const getResideCard = async () => {
  try {
    const data = await instance.get("/api/residence");
    console.log(data);
    console.log("[SUCCESS] GET residence card data");
    return data.data.data.residence;
  } catch (e) {
    console.log("[FAIL] GET residence card data");
    return null;
  }
};

export const getExpCard = async () => {
  try {
    const data = await instance.get("/api/exp");
    console.log(data);
    console.log("[SUCCESS] GET exp card data");
    return data.data.data.exp;
  } catch (e) {
    console.log("[FAIL] GET exp card data");
    return null;
  }
};

export const postHostInfo = async (hostdata) => {
  try {
    console.log("data", hostdata);
    const data = await instance.post("/api/host", hostdata);
    console.log("[SUCCESS] POST host data");
    return data;
  } catch (e) {
    console.log("[FAIL] POST host data", e);
    alert("유효한 정보를 입력해주세요.");
    return null;
  }
};
