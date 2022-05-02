const sanityClient = require("@sanity/client");

const imageUrlBuilder = require('@sanity/image-url');

export default async (ctx, inject) => {
    
  const client = sanityClient({
    projectId: "21fy9g0s",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: true,
  });

  const imageBuilder = imageUrlBuilder(client)

  inject("sanity", client);

  inject("sanityImage", imageBuilder);
};
