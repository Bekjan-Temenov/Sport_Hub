

export const ModalDelete = ({ handleDelete, closeModal, itemId }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
      <div className="bg-white p-8 rounded-lg shadow-xl w-[250px] md:w-[350px] h-[250px] flex flex-col justify-between">
        <h2 className="mb-4 text-2xl font-semibold text-center text-gray-800">
          Удалить рекламу?
        </h2>
        <p className="mb-6 text-center text-gray-600">
          Вы уверены, что хотите удалить этот элемент? Это действие нельзя
          отменить.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={closeModal}
            className="px-6 py-2 text-sm font-medium text-gray-800 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            Нет
          </button>
          <button
            onClick={() => handleDelete(itemId)}
            className="px-6 py-2 text-sm font-medium text-white bg-red-600 rounded-full hover:bg-red-700"
          >
            Да
          </button>
        </div>
      </div>
    </div>
  );