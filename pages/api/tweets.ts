import type { NextApiRequest, NextApiResponse } from "next";

interface Ireply {
  id: number;
  name: string;
  userName: string;
  reply: string;
}

const result: Ireply[] = [
  {
    id: 0,
    name: "BBBig",
    userName: "@bbbig",
    reply: "好家伙！",
  },
  {
    id: 1,
    name: "Gift Egwuenu ✨",
    userName: "@lauragift_",
    reply: "Your projects are amazing! 👍 💪",
  },
  {
    id: 2,
    name: "Champagne Papi",
    userName: "@loIyparty",
    reply: "Man your portfolio is 🔥",
  },
  {
    id: 3,
    name: "Ruks 🦍",
    userName: "@ruks_ahwin",
    reply: "Really impressive man 👏",
  },
  {
    id: 4,
    name: "周某（同级校友）",
    userName: "@mrchou",
    reply: "做的那个真心不戳！内容挺全的，很丰富。",
  },
  {
    id: 5,
    name: "Moyi.",
    userName: "@moyiabioye",
    reply: "Looking good man 🔥🔥",
  },
  {
    id: 6,
    name: "Shula ☘️",
    userName: "@AsoAmarachi",
    reply: "Beautiful site you have! ❤️",
  },
  {
    id: 7,
    name: "8thLegion",
    userName: "@8thLegion",
    reply: "Great Portfolio man 🚀🚀🚀...Wish you luck",
  },
  {
    id: 8,
    name: "不愿透露姓名的吃瓜群众",
    userName: "@master",
    reply: "🐮🍺",
  },
  {
    id: 9,
    name: "Big Sheddy 🦅",
    userName: "@coder_blvck",
    reply: "This is really cool!",
  },
  {
    id: 10,
    name: "Onazi 🦄",
    userName: "@VictorOnazi_",
    reply: "🔥 well-done.",
  },
  {
    id: 11,
    name: "Cynthia 🏳️‍🌈 Sanchez",
    userName: "@cyntss",
    reply: "Love your design! sharing now!",
  },
  {
    id: 12,
    name: "Abiodun Adefila",
    userName: "@adefaze",
    reply: "impressive Clapping hands sign wish you success",
  },
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    data: result,
  });
}
