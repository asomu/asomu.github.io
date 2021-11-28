const quotes = [
  {
    quote: "삶이 있는 한 희망은 있다 .",
    author: "   키케로",
  },
  {
    quote: "산다는것 그것은 치열한 전투이다.",
    author: "로망로랑",
  },
  {
    quote:
      "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    author: "사무엘존슨",
  },
  {
    quote: "언제나 현재에 집중할수 있다면 행복할것이다. ",
    author: "파울로 코엘료 ",
  },
  {
    quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
    author: "엘버트 허버드",
  },
  {
    quote: "신은 용기있는자를 결코 버리지 않는다.",
    author: "켄러",
  },
  {
    quote: "피할수 없으면 즐겨라.",
    author: "로버트 엘리엇",
  },
  {
    quote: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에 .",
    author: "엘사 맥스웰 ",
  },
  {
    quote: "먼저핀꽃은 먼저진다  남보다 먼저 공을 세우려고 조급히 서둘것이 아니다.",
    author: "채근담",
  },
  {
    quote: "행복한 삶을 살기위해 필요한 것은 거의 없다.",
    author: "마르쿠스 아우렐리우스 안토니우스",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;