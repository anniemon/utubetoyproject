const today = new Date();
const arr = today.toDateString().split(' ')

function nth(day) {
	if (day === 1 || day === 21) return day + 'st';
	else if (day === 2 || day === 22) return day + 'nd';
	else if (day === 3 || day === 23) return day + 'rd';
	else return day + 'th';
}

const day = nth(arr[2]);
const present = `${arr[1]} ${day} ${arr[3].slice(0, 2)}`


export const dummyData =
{
	videos: [
		{
			id: 1,
			name: "video1",
			username: "철수",
			img: '../images/thumbnail1.png',
			src: '../videos/video1.mp4',
			view: 0,
			created_at: present
		},
		{
			id: 2,
			name: "video2",
			username: "영희",
			img: "../images/thumbnail2.png",
			src: '../videos/video2.mp4',
			view: 0,
			created_at: present
		},
		{
			id: 3,
			name: "video3",
			username: "짱구",
			img: "../images/thumbnail3.png",
			src: '../videos/video3.mp4',
			view: 0,
			created_at: present
		},
		{
			id: 4,
			name: "video4",
			username: "맹구",
			img: "../images/thumbnail4.png",
			src: '../videos/video4.mp4',
			view: 0,
			created_at: present
		},
		{
			id: 5,
			name: "video5",
			username: "훈이",
			img: "../images/thumbnail5.png",
			src: '../videos/video5.mp4',
			view: 0,
			created_at: present
		},
		{
			id: 6,
			name: "video6",
			username: "흰둥이",
			img: "../images/thumbnail6.png",
			src: '../videos/video6.mp4',
			view: 0,
			created_at: present
		}
	],
	comment: [{
		comment: "안녕하세요1",
		created_at: present
	},
	{
		comment: "안녕하세요2",
		created_at: present
	},
	{
		comment: "안녕하세요3",
		created_at: present
	},
	{
		comment: "안녕하세요4",
		created_at: present
	}
	]
}