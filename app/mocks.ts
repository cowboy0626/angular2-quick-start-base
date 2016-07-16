import { CarPart } from './car-part';

export let CARPARTS: CarPart[] = [

	{
		"id" : 1,
		"name" : "핸들",
		"description" : "겨울에 따뜻한 핸들커버가 있는 핸들",
		"quantity" : 0,
		"inStock" : 15,
		"featured" : true,
		"price" : 35000,
		"image" : "/images/handle.jpg"
	}, 

	{
		"id" : 2,
		"name" : "타이어",
		"description" : "스노우체인이 장착된 4계절용 타이어",
		"inStock" : 0,
		"quantity" : 0,
		"featured" : true,
		"price" : 450000,
		"image" : "/images/tire.jpg"
	}, 


	{
		"id" : 3,
		"name" : "와이퍼",
		"description" : "10년을 보장하는 와이퍼... 잘 딱임 .. 보장",
		"inStock" : 5,
		"quantity" : 0,
		"featured" : true,
		"price" : 18000,
		"image" : "/images/wiper.jpg"
	}, 


	{
		"id" : 4,
		"name" : "가스통",
		"description" : "차량용 가스통.. 테러에 좋습니다.",
		"inStock" : 300,
		"quantity" : 0,
		"featured" : false,
		"price" : 3500,
		"image" : "/images/gas.jpg"
	}
]	
