import SanityClient from "@sanity/client";

export default SanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
});
