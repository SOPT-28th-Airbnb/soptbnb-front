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

export const getNearCard = async () => {
  try {
    // localhost 뒤의 번호 및 주소는 서버로부터 데이터를 받아오는 주소를 나타내므로
    // 앞에서 json-server에서 지정한 번호와 세부주소를 작성하시면 됩니다
    const rawData = await axios.get("http://localhost:3000/near");
    console.log("[SUCCESS] GET card data");
    return rawData.data.data; // rawData의 console을 찍어보시면 data 아래의 data가 저희가 원하는 데이터입니다
  } catch (e) {
    console.log("[FAIL] GET card data");
    return null;
  }
};
