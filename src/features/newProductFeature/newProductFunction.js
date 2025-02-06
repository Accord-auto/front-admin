import { addProduct } from "../../shared/api/productsApi";

export const funcCreateProduct = async (form, thunkAPI) => {
  const formData = new FormData();
  const additional = [];

  const img = await (await fetch(form.photos.mainPhoto)).blob();
  const mainFile = new File([img], "test.png", { type: img.type });
  formData.append("mainPhoto", mainFile);

  for (let i = 0; i < form.photos.morePhotos.length; i++) {
    const imgAdditional = await (await fetch(form.photos.morePhotos[i])).blob();
    const otherFile = new File([imgAdditional], "test.png", {
      type: imgAdditional.type,
    });
    formData.append("additionalPhotos", otherFile);
    additional.push(otherFile);
  }

  formData.append(
    "productRequestPayload",
    JSON.stringify({
      ...form.info,
    })
  );

  const res = await addProduct(formData, thunkAPI);
  return res;
};
