import { Dropdown } from "flowbite-react";

/**
 * DROPDOWN LIST
 * @param props.list [array]
 * @param props.content [string]
 * @param props.func [function]
 * @param props.dis [boolean]
 * @return JSX element
 */

export const DropdownList = ({ list, content, func, dis }) => {
  const errorChoose = () => {
    alert(
      "В панели администратора категории и характеристики должны быть созданы, до создания товара"
    );
  };
  return (
    <>
      {dis ? (
        <span className="data-dropdown">{content}</span>
      ) : (
        <Dropdown
          label=""
          renderTrigger={() => (
            <span className="data-dropdown">{content} &#8595;</span>
          )}
        >
          <div className="data-list">
            {list.length > 0 ? (
              list.map((element) => (
                <Dropdown.Item
                  key={element.id}
                  onClick={() => func(element)}
                  className="data-list-item"
                >
                  {element.name}
                </Dropdown.Item>
              ))
            ) : (
              <Dropdown.Item className="data-list-item" onClick={errorChoose}>
                Нет созданных элементов
              </Dropdown.Item>
            )}
          </div>
        </Dropdown>
      )}
    </>
  );
};
