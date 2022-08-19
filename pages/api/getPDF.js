import stream from "stream";
import { promisify } from "util";
import fetch from "node-fetch";

const pipeline = promisify(stream.pipeline);

const handler = async (req, res) => {
  const url =
    "https://www.americanexpress.com/content/dam/amex/us/staticassets/pdf/GCO/Test_PDF.pdf";
  // const url =
  //   "https://firebasestorage.googleapis.com/v0/b/blog-9e552.appspot.com/o/thunder-file_7bdb1aad.pdf?alt=media&token=fa1f5b1a-c4bb-43ce-82c9-d3681b14e75e";

  const API_URL =
    "https://campground-data-server-6hsz3.ondigitalocean.app/api/v1/campgrounds/slug/platte-river";
  const resultData = await fetch(API_URL);
  const data = await resultData.json();
  const response = await fetch(data.data.campgroundMap);
  if (!response.ok)
    throw new Error(`unexpected response ${response.statusText}`);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=map.pdf");
  await pipeline(response.body, res);
};

export default handler;
