const backendUrl = import.meta.env.VITE_BACKEND_URL;

const apiURL = `${backendUrl}/photos`;

export const PhotosComponent = ({ product }) => {
  if (!product) {
    return <div className="comp">Загрузка...</div>;
  }
  return (
    <div className="edit-photos-container">
      <img
        src={`${apiURL}/${product.mainPhotoUrl}`}
        className="edit-main-photo"
      ></img>
      <div className="edit-photos-cont">
        {Array.isArray(product?.additionalPhotos) ? (
          product.additionalPhotos.map((photo, i) => (
            <img
              src={`${apiURL}/${photo}`}
              className="edit-ads-photo"
              key={i}
            ></img>
          ))
        ) : (
          <p>No additional photos available</p>
        )}
      </div>
    </div>
  );
};
