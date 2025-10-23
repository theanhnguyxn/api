import { pinyin } from "pinyin-pro";

export default function handler(req, res) {
  const text = req.query.p || "";
  const result = pinyin(text, { toneType: "mark" });
  res.status(200).json({ pinyin: result });
}
