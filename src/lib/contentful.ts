import { createClient } from "contentful";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export type ImageType = {
  src: string;
  height: number;
  width: number;
  caption: string;
};

export function useImages(eventID: string) {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  async function fetchImages() {
    const client = createClient({
      space: (customFields.CONTENTFUL_SPACE_ID as string) ?? "",
      environment: "master",
      accessToken: (customFields.CONTENTFUL_ACCESS_TOKEN as string) ?? "",
    });

    const res = await client.getEntry(eventID);

    const images: ImageType[] = res.fields.images.map((img) => ({
      caption: img.fields.title,
      src: `https:${img.fields.file.url}`,
      // original: `https:${img.fields.file.url}`,
      width: img.fields.file.details.image.width,
      height: img.fields.file.details.image.height,
    }));

    return images;
  }

  return { fetchImages };
}
