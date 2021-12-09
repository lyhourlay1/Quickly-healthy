export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (modal, entity = null) => {
  return {
    type: OPEN_MODAL,
    modal,
    entity,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};
