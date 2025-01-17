import { CharacteristicForm } from "../../features/characteristicFeature/CharacteristicForm";
import { CharacteristicsList } from "../../features/characteristicFeature/CharacteristicsList";
import { Header } from "../../shared/components/Header";
import "./characteristicsPage.css";

/**
 * CHARACTERISTICS PAGE
 * @return JSX element
 */

export const CharacteristicsPage = () => {
  return (
    <>
      <Header />
      <h1 className="title-page">Характеристики</h1>
      <CharacteristicForm />
      <CharacteristicsList />
    </>
  );
};
