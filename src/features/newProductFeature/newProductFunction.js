import { addProduct } from "../../shared/api/productsApi";

export const funcCreateProduct = async (form, thunkAPI) => {
  const formData = new FormData();
  const additional = [];

  const img = await (await fetch(form.photos.mainPhoto)).blob();

  const file = new File([img], "test.png", { type: img.type });

  for (let i = 0; i < form.photos.morePhotos.length; i++) {
    const img2 = await (await fetch(form.photos.morePhotos[i])).blob();
    const file2 = new File([img2], "test.png", { type: img2.type });
    formData.append("additionalPhotos", file2);
    additional.push(file2);
  }

  formData.append(
    "productRequestPayload",
    JSON.stringify({
      ...form.info,
    })
  );
  formData.append("mainPhoto", file);

  const res = await addProduct(formData, thunkAPI);

  return res;
};
