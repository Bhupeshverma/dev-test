// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const page = req.query.page || 1;
  const resData = await fetch(
    `https://api.ratecity.com.au/v2/home-loans?page=${page}`,
    {
      headers: {
        "x-api-key": "MaDX2Oo31g3FLAHesYHtGa3rHe40uqkJ8TmbPJn9"
      }
    }
  );
  if (!resData.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    res.status(error.status).json({ error });
  } else {
    const data = await resData.json();
    res.status(200).json({ data });
  }
}
