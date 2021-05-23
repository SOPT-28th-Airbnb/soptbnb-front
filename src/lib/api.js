import axios from "axios";

/*
// json structure
{
	"data": {
		"spot": [
			{
				id: 0,
				img: "https://~~~",
				name: "서울",
				time:"20"
			},
		],
		"residence": [
			{
				id: 0,
				img: "https://~~~",
				desc: "집 전체",
			},
		],
		"exp": [
			{
				id: 0,
				img: "https://~~~",
				type: "체험",
				desc:"어디에서든 세계 각자의 매력을 만나실 수 있습니다."
			},
		]
	}
}
*/

const instance = axios.create({
  baseURL: "http://18.116.201.53:5000",
  timeout: 1000,
});

export const getNearCard = async () => {
  try {
    const data = await instance.get("/api");
    console.log(data);
    console.log("[SUCCESS] GET near card data");
    return data.data.data.spot;
  } catch (e) {
    console.log("[FAIL] GET card data");
    return null;
  }
};

export const getResidCard = async () => {
  try {
    const data = await instance.get("/api");
    console.log("[SUCCESS] GET residence card data");
    return data.data.data.residence;
  } catch (e) {
    console.log("[FAIL] GET card data");
    return null;
  }
};

export const getExpCard = async () => {
  try {
    const data = await instance.get("/api");
    console.log("[SUCCESS] GET exp card data");
    return data.data.data.exp;
  } catch (e) {
    console.log("[FAIL] GET card data");
    return null;
  }
};
