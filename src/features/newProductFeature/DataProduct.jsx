import { NPinfo1 } from "../../pages/newProductPage/components/NPinfo1";
import { NPinfo2 } from "../../pages/newProductPage/components/NPinfo2";
import { NPinfo3 } from "../../pages/newProductPage/components/NPinfo3";
import { NPinfo4 } from "../../pages/newProductPage/components/NPinfo4";
import { NPinfo5 } from "../../pages/newProductPage/components/NPinfo5";
import { NPinfo6 } from "../../pages/newProductPage/components/NPinfo6";

export const DataProduct = () => {
  return (
    <div className="newP-info">
      <p className="title-data">Информация о товаре</p>
      <NPinfo1 />
      <NPinfo2 />
      <NPinfo3 />
      <NPinfo4 />
      <NPinfo5 />
      <NPinfo6 />
      <button type="submit" className="data-btn">
        Создать
      </button>
    </div>
  );
};
