import axios from 'axios';
import cheerio from 'cheerio';

async function ytshort(Url, type = "mp4") {
  let { data: html } = await axios.post("https://ytdownloadid.herokuapp.com/download", {
    "choices-single-default": format == "mp4" ? "Mp4 / Video" : "Mp3 / Audio",
    "url": Url
  })
  let $ = cheerio.load(html)
  let url = ($("div.s003 > div.first-wrap > button").attr("onclick")).split(" = ")[1].replace(/[\"]/g, "")

  return url
}

export { ytshort }
