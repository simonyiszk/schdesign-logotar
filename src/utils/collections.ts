import type { Collection, Logo } from "~/@generated/payload-types";

type CollectionChildrenCompositeType = {
  relationTo: "collections";
  value: number | Collection;
} | {
  relationTo: "logos";
  value: number | Logo;
};

/**
 * Converts a collection's children into a 2D array of logos.
 * If `separateLogos` is true, each logo will be in its own sub-array.
 * If false, all logos will be combined into a single sub-array.
 *
 * @param {Object} params - The parameters for the function.
 * @param {CollectionChildrenCompositeType[]} params.composite - The composite collection children.
 * @param {boolean} params.separateLogos - Whether to separate logos into individual arrays.
 * @returns {Logo[][]} A 2D array of logos.
 */
export function collectionChildrenTo2DArray({
  composite,
  separateLogos,
}: {
  composite: CollectionChildrenCompositeType[];
  separateLogos: boolean;
}): Logo[][] {
  const result: Logo[][] = [];
  const combinedLogos: Logo[] = [];

  composite.forEach((item) => {

    if (item.relationTo === "logos") {
      const logo = item.value;

      if (
        typeof logo === "number" ||
        typeof logo.previewImage === "number" ||
        typeof logo.masterFile === "number" ||
        logo.files?.some((file) => typeof file === "number") ||
        !logo.showInCollections
      ) {
        return;
      }

      if (separateLogos) {
        result.push([logo]);
      } else {
        combinedLogos.push(logo);
      }
    }

    if (item.relationTo === "collections") {
      const collection = item.value;

      if (
        typeof collection === "number" ||
        !collection.children ||
        collection.children.length === 0 ||
        collection.children.some((child) => typeof child === "number") ||
        !collection.showInParent
      ) {
        return;
      }

      const childLogos = collectionChildrenTo2DArray({
        composite: collection.children,
        separateLogos: false, // We don't want to separate logos in child collections
      });

      if (childLogos.length > 0) {
        result.push(...childLogos);
      }
    }
  });

  if (!separateLogos && combinedLogos.length > 0) {
    result.push(combinedLogos);
  }

  return result;
}
